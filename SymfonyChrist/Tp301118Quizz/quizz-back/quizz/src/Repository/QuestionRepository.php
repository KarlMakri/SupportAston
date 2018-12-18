<?php

namespace App\Repository;

use App\Entity\Question;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Question|null find($id, $lockMode = null, $lockVersion = null)
 * @method Question|null findOneBy(array $criteria, array $orderBy = null)
 * @method Question[]    findAll()
 * @method Question[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Question::class);
    }

    public function findByFilters($category, $difficulty)
    {
        $qb = $this->createQueryBuilder('q');

        if ($category) {
          $qb
            ->andWhere('q.category = :category')
            ->setParameter('category', $category);
        }

        if ($difficulty) {
          $qb
            ->andWhere('q.difficulty = :difficulty')
            ->setParameter('difficulty', $difficulty);
        }

        return $qb
          ->orderBy('q.id', 'DESC')
          ->getQuery()
          ->getResult()
        ;

    }

    public function findByFiltersAssoc($category, $difficulty)
    {

        $connection = $this->getEntityManager()
            ->getConnection();

        $sql =

            'SELECT 
            answer.label AS answer_label,
            answer.id AS answer_id,
            question.label AS question_label,
            question.id AS question_id
            FROM answer 
            JOIN question
            ON question.id = answer.question_id
            WHERE question.id > 0'
        ;

        $bindings = array();

        if($category){

            $sql .= ' AND question.category_id = :category';
            $bindings[':category'] = $category;

        }

        if($difficulty){

            $sql .= ' AND question.difficulty = :difficulty';
            $bindings[':difficulty'] = $difficulty;

        }

        // Réponse données dans l'Ordre aléatoire
        $sql .= ' ORDER BY RAND()';

            $query = $connection->prepare($sql);
            $query->execute($bindings);

        $answers = $query->fetchAll();

        // Réorganisation des données
        $questions = [];
        $key = 'question_id';
        foreach ($answers as $answer){
            //Extraction de l'id de la question afin de créer un indice dans le tableau $questions
//            $questions[$answer[$key]][] = $answer['answer_label'];
            $questions[$answer[$key]]['question'] = array(

                'label' => $answer['question_label'],
                'id' => $answer['question_id'],

            );

            $questions[$answer[$key]]['answers'][] = array(

                'label' => $answer['answer_label'],
                'id' => $answer['answer_id'],

            );
        }




        // Chaque libellé de question est devenu un indice (clé) du tableau $questions à cette clé est associéu un tableau associée de réponses

        shuffle($questions); // Mélange les questions de manière aléatoire
        return $questions;

    }

}

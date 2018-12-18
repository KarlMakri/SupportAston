<?php

namespace App\Repository;

use App\Entity\QuestionOld;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method QuestionOld|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionOld|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionOld[]    findAll()
 * @method QuestionOld[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, QuestionOld::class);
    }

     /**
      * @return QuestionOld[] Returns an array of QuestionOld objects
      */

    public function findByFilters($category, $difficulty)
    {
        $qb = $this->createQueryBuilder('q');

        if($category){
            $qb
                ->andWhere('q.category =:category')
                ->setParameter('category', $category);
        }

        if($difficulty){
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


}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Question;
use App\Entity\Answer;
use App\Entity\Category;
use App\Form\QuestionType;
use App\Form\AnswerType;

class QuestionController extends AbstractController
{
    /**
     * @Route("/question/", name="question")
     */
    public function index(Request $request)
    {
      // récupération paramètres URL
      $category = $request->query->get('category');
      $difficult = $request->query->get('difficulty');

      $questions = $this->getDoctrine()
        ->getRepository(Question::class)
        //->findAll()
        ->findByFilters($category, $difficult)
        ;


      // filtres de recherche
      $categories = $this->getDoctrine()
        ->getRepository(Category::class)
        ->findAll();

      $difficulty = array(
        'Facile' => 1,
        'Intermédiaire' => 2,
        'Difficile' => 3
      );



      return $this->render('question/index.html.twig', [
          'questions' => $questions,
          'categories' => $categories,
          'difficulty' => $difficulty
      ]);
    }

    /**
     * @Route("/question/detail/{id}", name="question_detail")
     */
    public function detail($id, Request $request)
    {
      $question = $this->getDoctrine()
        ->getRepository(Question::class)
        ->find($id);

      $answer = new Answer();
      $answer->setQuestion($question);
      $form = $this->createForm(AnswerType::class, $answer);

      $form->handleRequest($request);
      if ($form->isSubmitted()) {
        $answer = $form->getData();
        $em = $this->getDoctrine()->getManager();
        $em->persist($answer);
        $em->flush();
      }

      return $this->render('question/detail.html.twig', [
          'question' => $question,
          'form' => $form->createView()
      ]);
    }

    /**
     * @Route("/question/add", name="question_add")
     */
    public function add(Request $request)
    {
      $question = new Question();
      $form = $this->createForm(QuestionType::class, $question);

      $form->handleRequest($request);
      if ($form->isSubmitted()) {
        $question = $form->getData();
        $em = $this->getDoctrine()->getManager();
        $em->persist($question);
        $em->flush();
      }

      return $this->render('form.html.twig', [
          'form' => $form->createView(),
      ]);
    }

    /**
     * @Route("/question/json", name="question_json")
     */
    public function index_json(Request $request)
    {
        // récupération paramètres URL
        $category = $request->query->get('category');
        $difficulty = $request->query->get('difficulty');

        $questions = $this->getDoctrine()
            ->getRepository(Question::class)
            //->findAll()
            ->findByFiltersAssoc($category, $difficulty);
            //->findByFilters($category, $difficult)
        ;

        if(sizeof($questions) === 0){

            return new JsonResponse(['result' => null]);

        } else {

            return new JsonResponse(['result' => $questions]);
        }

//      var_dump($questions);
//        echo sizeof($questions);


    }

    /**
     * @Route("/question/client/check", name="question_client_check", methods={"POST"})
     */
    public function client_check(Request $request)
    {
        // Accès au body de la requête Ajax en POST grâce à la méthode getContent
        $request_body = json_decode($request->getContent());
        $question_id = $request_body->question_id;
        $question_answers = $request_body->answers; // Vérifier les réponses données par le client en  rapport à la question traitée, identifiée

        $success = true;

        $answers = $this->getDoctrine() // Tableau des bonnes réponses

        ->getRepository(Answer::class)
            ->findCorrectByQuestionId($question_id);

        if(sizeof($question_answers) !== sizeof($answers)){

            $success = false;

        }else{

            //Tableaux de même longueur
            foreach($question_answers as $question_answer){


                // A chaque itération, vérifier que l'id de la question existe, est présent dans le tableau des bonnes réponses avec array_search
                if (!$this->exists($question_answer, $answers)){

                    $success = false;
                }
            } //Fin foreach
        }// Fin if

        return new JsonResponse(array(

            'success' => $success,
            'answers' => $answers));
    }

    /**
     * @Route("/question/test", name="question_test")
     */
    public function test ()
    {

        $question_id = 13;
        $question_answers = [18,19];
        $success = true;

        $answers = $this->getDoctrine() // Tableau des bonnes réponses

            ->getRepository(Answer::class)
            ->findCorrectByQuestionId($question_id);

        if(sizeof($question_answers) !== sizeof($answers)){

            $success = false;

        }else{

            //Tableaux de même longueur
            foreach($question_answers as $question_answer){


                // A chaque itération, vérifier que l'id de la question existe, est présent dans le tableau des bonnes réponses avec array_search
                if (!$this->exists($question_answer, $answers)){

                    $success = false;
                }
            }
        }


        return $this->render('test.html.twig', [

            'answers' => $answers,
            'success' => $success
        ]);

    }

    private  function exists($search, $arr){

        $found = false;

        for($i=0; $i<sizeof($arr); $i++){

            if($search == $arr[$i]['id']){

                $found = true;
                break;
            }
        }

        return $found; // Renvoie un booléan
    }


}
<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Answer;
use App\Form\AnswerType;
use App\Entity\QuestionOld;
use App\Form\QuestionType;
use App\Entity\Category;


class QuestionController extends AbstractController
{
    /**
     * @Route("/question", name="question")
     */
    public function index(Request $request)
    {
        // Récupération parmètres URL
        $category = $request->query->get('category');
        $difficulty =  $request->query->get('difficulty');

        $questions = $this->getDoctrine()

            ->getRepository(QuestionOld::class)
            //->findAll();
            ->findByFilters($category, $difficulty);

        $categories = $this->getDoctrine() //Filtres de recherche

            ->getRepository(Category::class)
            ->findAll();

        $difficulty =  array(

            'Facile' => 1,
            'Intermédiaire' => 2,
            'Difficile' => 3,
        );



        return $this->render('question/index.html.twig', [
            'questions' => $questions,
            'categories' => $categories,
            'difficulty' => $difficulty
        ]);
    }

    /**
     * @Route("/question/add", name="question_add")
     */
    public function add(Request $request)
    {

        $question = new QuestionOld();

        $form = $this->createForm(QuestionType::class, $question);

        $form->handleRequest($request);

        if($form->isSubmitted()){

            $question = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($question);
            $em->flush();
            //return $this->redirectToRoute('question');
        }


        return $this->render('question/add.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/question/{id}/edit", name="question_edit")
     */
    public function edit($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        // récupération des données du pays à modifier
        $question = $em
            ->getRepository(QuestionOld::class)
            ->find($id);
        $form = $this->createForm(QuestionType::class, $question);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            // modifie l'object country
            // avec les données postées
            $question = $form->getData();
            $em->flush();
            return $this->redirectToRoute('question');
        }

        return $this->render('question/form.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/question/{id}/delete", name="question_delete")
     */
    public function delete($id)
    {
        $em = $this->getDoctrine()->getManager();
        $question = $this->getDoctrine()
            ->getRepository(QuestionOld::class)
            ->find($id);
        $em->remove($question);
        $em->flush();
        return $this->redirectToRoute('question');
    }

    /**
     * @Route("/question/detail/{id}", name="question_detail")
     */
    public function detail($id, Request $request)
    {

        $question = $this->getDoctrine()
            ->getRepository(QuestionOld::class)
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


}

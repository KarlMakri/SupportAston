<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Answer;
use App\Form\AnswerType;

class AnswerController extends AbstractController
{
    /**
     * @Route("/answer", name="answer")
     */
    public function index()
    {
        $answers = $this->getDoctrine()

            ->getRepository(Answer::class)
            ->findAll();

        return $this->render('answer/form.html.twig', [
            'answers' => $answers,
        ]);
    }

    /**
     * @Route("/answer/add", name="answer_add")
     */
    public function add(Request $request)
    {

        $answer = new Answer();

        $form = $this->createForm(AnswerType::class, $answer);

        $form->handleRequest($request);

        if($form->isSubmitted()){

            $answer = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($answer);
            $em->flush();
            return $this->redirectToRoute('answer');
        }


        return $this->render('answer/add.html.twig', [
            'form' => $form->createView()
        ]);
    }
}

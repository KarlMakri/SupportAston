<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonRequest;

use App\Entity\Score;
use App\Form\ScoreType;

class ScoreController extends AbstractController
{
    /**
     * @Route("/score", name="score_new", methods={"POST"})
     */
    public function new(Request $request)
    {
        $request_body = json_decode($request->getContent());
        $username = $request_body->username;
        $result = $request_body->result;
        $em = $this->getDoctrine()->getManager();
        // la date est calculée dans le constructeur de Score
        // $date = date('Y-m-d H:i:s');
        $score = new Score($username, $result);
        $em->persist($score);
        $em->flush();
        return new JsonResponse($score->getId());
    }
    /**
     * @Route("/score", name="score_list", methods={"GET"})
     */
    public function list()
    {
        $scores = $this->getDoctrine()
            ->getRepository(Score::class)
            ->findBy([], ['result' => 'DESC']);
        return $this->render('score/index.html.twig', [
            'scores' => $scores
        ]);
    }

    /**
     * @Route("/score/add", name="score_add")
     */
    public function addscore(Request $request)
    {
        $score = $this->getDoctrine()
            ->getRepository(Score::class)
            //->findAll();
            ->findAllAssoc();

        //return new Response(json_encode($categories));  // json_encode  encode le corps de la requête mais n'ajoute aucun header supplémentaire indiquant au client qu'il s'agit de json
        return new JsonRequest($score);

        $score = new Score();
        $form = $this->createForm(ScoreType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $score = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($score);
            $em->flush();
        }

        return $this->render('form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

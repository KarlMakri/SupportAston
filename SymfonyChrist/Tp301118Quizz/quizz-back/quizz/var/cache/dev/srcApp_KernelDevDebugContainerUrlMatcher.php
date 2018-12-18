<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    use PhpMatcherTrait;

    public function __construct(RequestContext $context)
    {
        $this->context = $context;
        $this->staticRoutes = array(
            '/answer' => array(array(array('_route' => 'answer', '_controller' => 'App\\Controller\\AnswerController::index'), null, null, null, false, null)),
            '/answer/add' => array(array(array('_route' => 'answer_add', '_controller' => 'App\\Controller\\AnswerController::add'), null, null, null, false, null)),
            '/category' => array(array(array('_route' => 'category', '_controller' => 'App\\Controller\\CategoryController::index'), null, null, null, false, null)),
            '/category/add' => array(array(array('_route' => 'category_add', '_controller' => 'App\\Controller\\CategoryController::add'), null, null, null, false, null)),
            '/category/json' => array(array(array('_route' => 'category_json', '_controller' => 'App\\Controller\\CategoryController::index_json'), null, null, null, false, null)),
            '/question' => array(array(array('_route' => 'question', '_controller' => 'App\\Controller\\QuestionController::index'), null, null, null, true, null)),
            '/question/add' => array(array(array('_route' => 'question_add', '_controller' => 'App\\Controller\\QuestionController::add'), null, null, null, false, null)),
            '/question/json' => array(array(array('_route' => 'question_json', '_controller' => 'App\\Controller\\QuestionController::index_json'), null, null, null, false, null)),
            '/question/client/check' => array(array(array('_route' => 'question_client_check', '_controller' => 'App\\Controller\\QuestionController::client_check'), null, array('POST' => 0), null, false, null)),
            '/question/test' => array(array(array('_route' => 'question_test', '_controller' => 'App\\Controller\\QuestionController::test'), null, null, null, false, null)),
            '/score' => array(
                array(array('_route' => 'score_new', '_controller' => 'App\\Controller\\ScoreController::new'), null, array('POST' => 0), null, false, null),
                array(array('_route' => 'score_list', '_controller' => 'App\\Controller\\ScoreController::list'), null, array('GET' => 0), null, false, null),
            ),
            '/score/add' => array(array(array('_route' => 'score_add', '_controller' => 'App\\Controller\\ScoreController::addscore'), null, null, null, false, null)),
            '/_profiler' => array(array(array('_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'), null, null, null, true, null)),
            '/_profiler/search' => array(array(array('_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'), null, null, null, false, null)),
            '/_profiler/search_bar' => array(array(array('_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'), null, null, null, false, null)),
            '/_profiler/phpinfo' => array(array(array('_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'), null, null, null, false, null)),
            '/_profiler/open' => array(array(array('_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'), null, null, null, false, null)),
        );
        $this->regexpList = array(
            0 => '{^(?'
                    .'|/question/detail/([^/]++)(*:32)'
                    .'|/_(?'
                        .'|error/(\\d+)(?:\\.([^/]++))?(*:70)'
                        .'|wdt/([^/]++)(*:89)'
                        .'|profiler/([^/]++)(?'
                            .'|/(?'
                                .'|search/results(*:134)'
                                .'|router(*:148)'
                                .'|exception(?'
                                    .'|(*:168)'
                                    .'|\\.css(*:181)'
                                .')'
                            .')'
                            .'|(*:191)'
                        .')'
                    .')'
                .')(?:/?)$}sDu',
        );
        $this->dynamicRoutes = array(
            32 => array(array(array('_route' => 'question_detail', '_controller' => 'App\\Controller\\QuestionController::detail'), array('id'), null, null, false, null)),
            70 => array(array(array('_route' => '_twig_error_test', '_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'), array('code', '_format'), null, null, false, null)),
            89 => array(array(array('_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'), array('token'), null, null, false, null)),
            134 => array(array(array('_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'), array('token'), null, null, false, null)),
            148 => array(array(array('_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'), array('token'), null, null, false, null)),
            168 => array(array(array('_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception::showAction'), array('token'), null, null, false, null)),
            181 => array(array(array('_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception::cssAction'), array('token'), null, null, false, null)),
            191 => array(array(array('_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'), array('token'), null, null, false, null)),
        );
    }
}

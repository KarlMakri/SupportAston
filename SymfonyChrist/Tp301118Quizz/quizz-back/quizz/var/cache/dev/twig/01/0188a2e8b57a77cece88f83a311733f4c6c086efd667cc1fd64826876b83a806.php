<?php

/* question/index.html.twig */
class __TwigTemplate_3871e937e314bd2868f70d4bc9d64f17f8c752813c739b9264991f206f801a75 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "question/index.html.twig", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "question/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "question/index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "
    ";
        // line 6
        echo "
  ";
        // line 8
        echo "  <div class=\"container\">
    <form>
      <select name=\"category\">
        <option value=\"0\">Choisir une catégorie</option>
          ";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new Twig_Error_Runtime('Variable "categories" does not exist.', 12, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["cat"]) {
            // line 13
            echo "            <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["cat"], "id", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["cat"], "name", array()), "html", null, true);
            echo "</option>
          ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cat'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 15
        echo "      </select>
      <select name=\"difficulty\">
        <option value=\"0\">Choisir un niveau</option>
          ";
        // line 18
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_array_keys_filter((isset($context["difficulty"]) || array_key_exists("difficulty", $context) ? $context["difficulty"] : (function () { throw new Twig_Error_Runtime('Variable "difficulty" does not exist.', 18, $this->source); })())));
        foreach ($context['_seq'] as $context["_key"] => $context["key"]) {
            // line 19
            echo "            <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["difficulty"]) || array_key_exists("difficulty", $context) ? $context["difficulty"] : (function () { throw new Twig_Error_Runtime('Variable "difficulty" does not exist.', 19, $this->source); })()), $context["key"], array(), "array"), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $context["key"], "html", null, true);
            echo "</option>
          ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['key'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 21
        echo "      </select>
      <button>Filtrer</button>
    </form>

    <br><br>

    <table class=\"table table-striped\">
        ";
        // line 28
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["questions"]) || array_key_exists("questions", $context) ? $context["questions"] : (function () { throw new Twig_Error_Runtime('Variable "questions" does not exist.', 28, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["question"]) {
            // line 29
            echo "          <tr>
            <td>";
            // line 30
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["question"], "label", array()), "html", null, true);
            echo "</td>
            <td>";
            // line 31
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["question"], "category", array()), "name", array()), "html", null, true);
            echo "</td>
            <td>Niveau ";
            // line 32
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["question"], "difficulty", array()), "html", null, true);
            echo "</td>
            <td>
                ";
            // line 34
            echo twig_escape_filter($this->env, twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, $context["question"], "answers", array())), "html", null, true);
            echo "
                Réponse(s) enregistrée(s)
            </td>

            <td>
              <a href=\"";
            // line 39
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("question_detail", array("id" => twig_get_attribute($this->env, $this->source, $context["question"], "id", array()))), "html", null, true);
            echo "\">Détails</a>
            </td>
          </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['question'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 43
        echo "    </table>
  </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "question/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  147 => 43,  137 => 39,  129 => 34,  124 => 32,  120 => 31,  116 => 30,  113 => 29,  109 => 28,  100 => 21,  89 => 19,  85 => 18,  80 => 15,  69 => 13,  65 => 12,  59 => 8,  56 => 6,  53 => 4,  44 => 3,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends 'base.html.twig' %}

{% block body %}

    {#{{ dump(questions) }}#}

  {# filtres #}
  <div class=\"container\">
    <form>
      <select name=\"category\">
        <option value=\"0\">Choisir une catégorie</option>
          {% for cat in categories %}
            <option value=\"{{cat.id}}\">{{cat.name}}</option>
          {% endfor %}
      </select>
      <select name=\"difficulty\">
        <option value=\"0\">Choisir un niveau</option>
          {% for key in difficulty|keys %}
            <option value=\"{{difficulty[key]}}\">{{key}}</option>
          {% endfor %}
      </select>
      <button>Filtrer</button>
    </form>

    <br><br>

    <table class=\"table table-striped\">
        {% for question in questions %}
          <tr>
            <td>{{question.label}}</td>
            <td>{{question.category.name}}</td>
            <td>Niveau {{question.difficulty}}</td>
            <td>
                {{ question.answers | length }}
                Réponse(s) enregistrée(s)
            </td>

            <td>
              <a href=\"{{path('question_detail', {'id': question.id})}}\">Détails</a>
            </td>
          </tr>
        {% endfor %}
    </table>
  </div>
{% endblock %}
", "question/index.html.twig", "C:\\Users\\Barkaoui\\Desktop\\SymfonyChristohe\\Tp301118Quizz\\quizz\\poec-symfony-automne-2018-quizz\\templates\\question\\index.html.twig");
    }
}

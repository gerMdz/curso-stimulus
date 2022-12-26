<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_dashboard")
     */
    public function dashboard(ChartBuilderInterface $chartBuilder): Response
    {
        $chart = $chartBuilder->createChart(Chart::TYPE_LINE);

        $chart->setData([
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            'datasets' => [
                [
                    'label' => 'Sales!',
                    'backgroundColor' => 'rgb(255, 99, 132)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => [522, 1500, 2250, 2197, 2345, 3122, 3099],
                ],
            ],
        ]);

//        $chart->setOptions([
//            'scales' => [
//                'y' => [
//                    'suggestedMin' => 0,
//                    'suggestedMax' => 100,
//                ],
//            ],
//        ]);

        return $this->render('admin/dashboard.html.twig', [
            'chart' => $chart,
        ]);
    }
}


      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [  
       {path:'charts/apex-charts',children:[ 
        {
        path: 'line-charts',
        loadComponent: () =>
          import('./line-charts/line-charts.component').then((m) => m.LineChartsComponent),
          title: 'Dashtic - Line Charts'
      },
      {
        path: 'area-charts',
        loadComponent: () =>
          import('./area-charts/area-charts.component').then((m) => m.AreaChartsComponent),
          title: 'Dashtic - Area Charts'
      },
     {
        path: 'bar-charts',
        loadComponent: () =>
          import('./bar-charts/bar-charts.component').then((m) => m.BarChartsComponent),
          title: 'Dashtic - Bar Charts'
      },  {
        path: 'column-charts',
        loadComponent: () =>
          import('./column-charts/column-charts.component').then((m) => m.ColumnChartsComponent),
          title: 'Dashtic - Column Charts'
      },  {
        path: 'mixedcharts',
        loadComponent: () =>
          import('./mixedcharts/mixedcharts.component').then((m) => m.MixedchartsComponent),
          title: 'Dashtic -  MIxed Charts'
      },  {
        path: 'rangeareacharts',
        loadComponent: () =>
          import('./rangeareacharts/rangeareacharts.component').then((m) => m.RangeareachartsComponent),
          title: 'Dashtic - Range Charts'
      },  {
        path: 'timelinecharts',
        loadComponent: () =>
          import('./timelinecharts/timelinecharts.component').then((m) => m.TimelinechartsComponent),
          title: 'Dashtic - TimeLine Charts'
      }, 
       {
        path: 'candlestickcharts',
        loadComponent: () =>
          import('./candlestickcharts/candlestickcharts.component').then((m) => m.CandlestickchartsComponent),
          title: 'Dashtic - CandleStick Charts'
      },  {
        path: 'boxplotcharts',
        loadComponent: () =>
          import('./boxplotcharts/boxplotcharts.component').then((m) => m.BoxplotchartsComponent),
          title: 'Dashtic - Box Plot Charts'
      },
      {
        path: 'bubblecharts',
        loadComponent: () =>
          import('./bubblecharts/bubblecharts.component').then((m) => m.BubblechartsComponent),
          title: 'Dashtic - Bubble Charts'
      },  {
        path: 'scattercharts',
        loadComponent: () =>
          import('./scattercharts/scattercharts.component').then((m) => m.ScatterchartsComponent),
          title: 'Dashtic - Scatter Charts'
      },  {
        path: 'heatmapcharts',
        loadComponent: () =>
          import('./heatmapcharts/heatmapcharts.component').then((m) => m.HeatmapchartsComponent),
          title: 'Dashtic - HeatMap Charts'
      },  {
        path: 'treemapcharts',
        loadComponent: () =>
          import('./treemapcharts/treemapcharts.component').then((m) => m.TreemapchartsComponent),
          title: 'Dashtic - TreeMap Charts'
      },  {
        path: 'piecharts',
        loadComponent: () =>
          import('./piecharts/piecharts.component').then((m) => m.PiechartsComponent),
          title: 'Dashtic - Pie Charts'
      },  {
        path: 'radialbarcharts',
        loadComponent: () =>
          import('./radialbarcharts/radialbarcharts.component').then((m) => m.RadialbarchartsComponent),
          title: 'Dashtic - Radial Charts'
      },  {
        path: 'radarcharts',
        loadComponent: () =>
          import('./radarcharts/radarcharts.component').then((m) => m.RadarchartsComponent),
          title: 'Dashtic - Radar Charts'
      },
      {
        path: 'polarareacharts',
        loadComponent: () =>
          import('./polarareacharts/polarareacharts.component').then((m) => m.PolarareachartsComponent),
          title: 'Dashtic - Polar Area Charts'
      },
      
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class apexchartsRoutingModule {
        static routes = admin;
      }
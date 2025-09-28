import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-consulta-var',
  standalone: true,
  imports: [FormsModule, NgApexchartsModule, NgSelectModule],
  templateUrl: './consulta-var.component.html',
  styleUrl: './consulta-var.component.scss'
})
export class ConsultaVarComponent {
  fechaConsulta = new Date().toLocaleDateString('sv-SE');
  idTipoMetodologia: number = 0;
  idNivelConfianza: number = 0;
  listaTipoMetodologia: any[] = [];
  listaNivelConfianza: any[] = [];

  chartHistogramaGyP: any;
  public chartLineaVaR: any;

  ngOnInit() {
    const datos = [
  { x: '-5.00', y: 0.00113 },
  { x: '-4.00', y: 0.00365 },
  { x: '-3.00', y: 0.02642 },
  { x: '-2.00', y: 0.06598 },
  { x: '-1.00', y: 0.05990 },
  { x: '0.00',  y: 0.01400 },
  { x: '1.00',  y: 0.01000 },
  { x: '2.00',  y: 0.00341 },
  { x: '3.00',  y: 0.00642 },
  { x: '3.90',  y: 0.00258 },
  { x: '4.00',  y: 0.00193 },
  { x: '5.00',  y: 0.00000 },
];

// Calcular media y desviación estándar
const valoresX = datos.map(d => parseFloat(d.x));
const media = valoresX.reduce((a, b) => a + b) / valoresX.length;
const std = Math.sqrt(valoresX.reduce((acc, val) => acc + Math.pow(val - media, 2), 0) / valoresX.length);

// Generar puntos de la curva Gaussiana escalada
const gaussian = datos.map(d => {
  const x = parseFloat(d.x);
  const gaussY = (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - media) / std, 2));
  return {
    x: d.x, // usar mismo string que en datos
    y: gaussY,
  };
});

this.chartHistogramaGyP = {
  series: [
    {
      name: 'Distribución de pérdidas/ganancias',
      type: 'bar',
      data: datos,
    },
    {
      name: 'Curva de Gauss',
      type: 'line',
      data: gaussian,
    },
  ],
  colors: ['#4454c3', '#FF4560'],
  xaxis: {
  type: 'category',
  categories: ['-5.00', '-4.00', '-3.00', '-2.00', '-1.00', '0.00', '1.00', '2.00', '3.00', '4.00', '5.00']
},
  chart: {
    height: 350,
    type: 'line',
  },
  plotOptions: {
    bar: {
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [0, 4], // línea solo para la curva
    curve: 'smooth'
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    floating: true,
    show: true,
    customLegendItems: ['Distribución de pérdidas/ganancias', 'Curva de Gauss'],
    markers: {
      fillColors: ['#4454c3', '#FF4560'],
    },
  },
  annotations: {
        xaxis: [
          {
            x: 0.3,
            borderColor: '#000',
            label: {
              borderColor: '#000',
              style: {
                color: '#fff',
                background: '#000',
              },
              text: 'VaR n%',
            },
          },
        ],
      },
};


    //Grafico lineal
    const data = [10, 41, 35, -51, 49, 62, 69, 91, -148, 100, 10, 41, -35, 51, 49, 62, 69, 91, 148, 100, 10, 41, 35, 51, 49, 62, 69, 91, 148, 100];
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    this.chartLineaVaR = {
      series: [
        {
          name: 'VaR diario',
          data: data,
        },
      ],
      chart: {
        height: 320,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      colors: ['#4454c3'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 3,
      },
      grid: {
        borderColor: '#f2f5f7',
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        title: {
          text: 'Día',
          fontSize: '13px',
          fontWeight: 'bold',
          style: {
            color: '#8c9097',
          },
        },
        labels: {
          show: true,
          style: {
            colors: '#8c9097',
            fontSize: '11px',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-label',
          },
        },
      },
      yaxis: {
        title: {
          text: 'VaR',
          fontSize: '13px',
          fontWeight: 'bold',
          style: {
            color: '#8c9097',
          },
        },
        labels: {
          show: true,
          style: {
            colors: '#8c9097',
            fontSize: '11px',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        floating: true,
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['VaR diario'],
        markers: {
          fillColors: ['#4454c3'],
        },
      },
      annotations: {
        yaxis: [
          {
            y: maxValue,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: `Máximo: ${maxValue}`,
            },
          },
          {
            y: minValue,
            borderColor: '#FF4560',
            label: {
              borderColor: '#FF4560',
              style: {
                color: '#fff',
                background: '#FF4560',
              },
              text: `Mínimo: ${minValue}`,
            },
          },
          {
            y: 0,
            borderColor: '#000',
            label: {
              borderColor: '#000',
              style: {
                color: '#fff',
                background: '#000',
              },
              text: 'Cero',
            },
          },
        ],
      },
    };
  }

  filtrarResultados() {

  }

  filtrarGraficoLinealVaR() {

  }
}

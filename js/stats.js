$(document).ready(function(){
    $.ajax({
                    method:"post",
                    url:"php/chartFA.php",
                    data: '',
                    cache:false,
                    success:function(resp){
                        var Jresp=$.parseJSON(resp);
                        alert(Jresp);
                        
                        
                    },
                    error:function(){
                        $.alert({
                            title: 'Error en el servidor, int&eacute;ntelo m&aacute;s tarde',
                            content: '',
                            boxWidth: '400px',
                            type: 'orange',
                            theme: 'material',
                            useBootstrap: false,
                            buttons: {
                                Entendido:{
                                    text: 'Entendido',
                                    btnClass: 'btn-red',
                                },
                            }
                        });
                    }
                });
});

var ctx = document.getElementById('chartFA').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Registros',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
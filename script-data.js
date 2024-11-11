// Database declaration, so that every colors represent a week and axes are labels
const dataOriginal = {
    labels: ['Impressions', 'CTR', 'Conversions', 'Conversion Rate', 'CPC', 'Total Spend', 'New Leads', 'Engagement Rate'],
    datasets: [
      { label: 'Week 1', data: [15000, 3.5, 450, 2.0, 1.20, 5400, 300, 8] },
      { label: 'Week 2', data: [17500, 4.0, 580, 2.3, 1.15, 5688, 350, 9] },
      { label: 'Week 3', data: [20000, 4.3, 620, 2.5, 1.10, 6200, 400, 8.5] },
      { label: 'Week 4', data: [18500, 3.9, 560, 2.4, 1.18, 5886, 370, 8.2] },
    ]
  };
  
  // average calcule so that the metric are not too diferent in the chart (more precise) clear visual
  const avgValues = dataOriginal.labels.map((_, i) =>
    dataOriginal.datasets.reduce((acc, week) => acc + week.data[i], 0) / dataOriginal.datasets.length
  );

  const normalizedData = dataOriginal.datasets.map(week => ({
    label: week.label,
    data: week.data.map((value, i) => ((value - 0.7 * avgValues[i]) / (0.3 * avgValues[i]))),  // Transformation plus forte
    borderColor: getColorForLabel(week.label),
    backgroundColor: getColorForLabel(week.label, 0.2),
    originalData: week.data
  }));
  
  // attach color to weeks 
  function getColorForLabel(label, alpha = 0.4) {
    const colors = {
      'Week 4': `rgba(30, 73, 226, ${alpha})`,  
      'Week 3': `rgba(253, 52, 156, ${alpha})`,  
      'Week 2': `rgba(0, 184, 245, ${alpha})`, 
      'Week 1': `rgba(172, 234, 255, ${alpha})`,  
    };
    return colors[label] || `rgba(0, 0, 0, ${alpha})`;  
  }
  
  // Layout of the chart, following chart.js definitions
  const config = {
    type: 'radar',
    data: {
      labels: dataOriginal.labels,
      datasets: normalizedData
    },
    options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            padding: 2,
            labels: {
              usePointStyle: true, 
              pointStyle: 'rectRounded',
              font: {
                size: 14,
              },
              color: '#ffffff' 
            },
          },
          tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#00338D', 
            bodyColor: '#00338D',  
            callbacks: {
              label: function (tooltipItem) {
                const dataset = normalizedData[tooltipItem.datasetIndex];
                const originalValue = dataset.originalData[tooltipItem.dataIndex];
                return `${tooltipItem.label}: ${originalValue}`;
              }
            }
          }
        },
        scales: {
          r: { 
            suggestedMin: -1.0,  
            suggestedMax: 1.5, 
            ticks: { display: false }
          }
        },
        elements: {
          line: {
            borderColor: (ctx) => ctx.dataset.borderColor,
            backgroundColor: '#00338D',       
        },
          point: {
            backgroundColor: (ctx) => ctx.dataset.backgroundColor,
            hoverBackgroundColor: (ctx) => ctx.dataset.backgroundColor,
            radius: 6, 
            hoverRadius: 9 
          }
        },
        layout: { padding: { bottom: 30 } },
        animation: { duration: 2000, easing: 'easeInOutQuad' }
      }
  };

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, config);


  // pour faire en sorte que la chart soit lisible sur telephone
  const canvas = document.getElementById('myChart');
  let scale = 1;

canvas.addEventListener('touchstart', (e) => {
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    if (touch1 && touch2) {
        const distance = Math.hypot(touch2.pageX - touch1.pageX, touch2.pageY - touch1.pageY);
        scale = distance / 100; 
        canvas.style.transform = `scale(${scale})`; 
    }
});

canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length == 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(touch2.pageX - touch1.pageX, touch2.pageY - touch1.pageY);
        scale = distance / 100;
        canvas.style.transform = `scale(${scale})`;
    }
});
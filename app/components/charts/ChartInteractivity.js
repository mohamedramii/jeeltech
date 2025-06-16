
export function enhanceLineChartInteractivity(chartId) {
  if (typeof window === 'undefined') return; 
  
  setTimeout(() => {
    try {
      const chart = document.querySelector(`#${chartId}`);
      if (!chart) return;

      const paths = chart.querySelectorAll('.apexcharts-line-series path');
      
      paths.forEach((path, index) => {
        path.addEventListener('mouseenter', () => {
          path.style.strokeDasharray = '0';
          path.style.transition = 'stroke-dasharray 0.3s ease';
          path.style.strokeWidth = '4px'; 
        });
        
        path.addEventListener('mouseleave', () => {
          path.style.strokeDasharray = '5';
          path.style.strokeWidth = '3px'; 
        });
      });
      
    } catch (err) {
      console.error('خطأ في تفعيل تفاعلية المخططات:', err);
    }
  }, 1000); 
}


export function enhanceAreaChartInteractivity(chartId) {
  if (typeof window === 'undefined') return;
  
  setTimeout(() => {
    try {
      const chart = document.querySelector(`#${chartId}`);
      if (!chart) return;
      
      const paths = chart.querySelectorAll('.apexcharts-area-series path');
      
      paths.forEach((path) => {
        path.addEventListener('mouseenter', () => {
          path.style.opacity = '0.9';
          path.style.transition = 'opacity 0.3s ease';
        });
        
        path.addEventListener('mouseleave', () => {
          path.style.opacity = '0.7';
        });
      });
      
    } catch (err) {
      console.error('خطأ في تفعيل تفاعلية المخطط المساحي:', err);
    }
  }, 1000);
}

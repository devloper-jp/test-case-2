// Charts.js - Chart visualizations for the dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Patient Engagement Chart
    const patientEngagementCtx = document.getElementById('patientEngagementChart');
    if (patientEngagementCtx) {
        const patientEngagementChart = new Chart(patientEngagementCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Returning Patients',
                        data: [65, 59, 80, 81, 56, 55],
                        backgroundColor: 'rgba(78, 115, 223, 0.05)',
                        borderColor: 'rgba(78, 115, 223, 1)',
                        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
                        tension: 0.3
                    },
                    {
                        label: 'Revenue Impact',
                        data: [28, 48, 40, 19, 86, 27],
                        backgroundColor: 'rgba(28, 200, 138, 0.05)',
                        borderColor: 'rgba(28, 200, 138, 1)',
                        pointBackgroundColor: 'rgba(28, 200, 138, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(28, 200, 138, 1)',
                        tension: 0.3
                    },
                    {
                        label: 'New Referrals',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: 'rgba(54, 185, 204, 0.05)',
                        borderColor: 'rgba(54, 185, 204, 1)',
                        pointBackgroundColor: 'rgba(54, 185, 204, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(54, 185, 204, 1)',
                        tension: 0.3
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Room Type Chart
    const roomTypeCtx = document.getElementById('roomTypeChart');
    if (roomTypeCtx) {
        const roomTypeChart = new Chart(roomTypeCtx, {
            type: 'doughnut',
            data: {
                labels: ['ICU', 'Private', 'General', 'Isolation'],
                datasets: [{
                    data: [12, 24, 30, 8],
                    backgroundColor: [
                        '#e74a3b',
                        '#4e73df',
                        '#1cc88a',
                        '#f6c23e'
                    ],
                    hoverBackgroundColor: [
                        '#e02d1b',
                        '#2e59d9',
                        '#17a673',
                        '#f4b619'
                    ],
                    hoverBorderColor: 'rgba(234, 236, 244, 1)'
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                cutout: '70%'
            }
        });
    }

    // Update charts when dark mode changes
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            // Update chart grid colors based on theme
            if (patientEngagementChart) {
                patientEngagementChart.options.scales.y.grid.color = isDarkMode ? 
                    'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                patientEngagementChart.update();
            }
        });
    }
});
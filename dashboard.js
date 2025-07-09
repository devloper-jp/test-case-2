// Dashboard.js - Main functionality for the dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Mobile sidebar toggle
    const sidebarToggle = document.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('body').classList.toggle('sidebar-toggled');
            document.querySelector('.sidebar').classList.toggle('toggled');
        });
    }

    // Search functionality for patient case counter
    const searchInput = document.querySelector('input[placeholder="Search by disease or doctor..."]');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('.table-striped tbody tr');
            
            tableRows.forEach(row => {
                const disease = row.cells[0].textContent.toLowerCase();
                const doctor = row.cells[2].textContent.toLowerCase();
                
                if (disease.includes(searchTerm) || doctor.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Simulate counter animations
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/,/g, ''));
        const duration = 2000; // 2 seconds
        const step = Math.ceil(target / (duration / 20)); // Update every 20ms
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current > target) current = target;
            
            // Format with commas
            counter.textContent = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
            if (current < target) {
                setTimeout(updateCounter, 20);
            }
        };
        
        updateCounter();
    });
});

// ... existing code ...

// Add hover tooltips for patient count details
const flowBoxes = document.querySelectorAll('.flow-box');
flowBoxes.forEach(box => {
    const counter = box.querySelector('.counter');
    const title = box.querySelector('h4, h5').textContent;
    
    if (counter) {
        const tooltip = new bootstrap.Tooltip(box, {
            title: `${title}: ${counter.textContent} patients`,
            placement: 'top',
            trigger: 'hover'
        });
    }
});
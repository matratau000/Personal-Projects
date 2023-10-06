document.addEventListener("DOMContentLoaded", function() {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const container = document.getElementById('orbit-container');
    const icons = document.querySelectorAll('.orbit');
    const connections = document.getElementById('connections');
    
    function updateLines() {
        // Clear existing lines
        while (connections.firstChild) {
            connections.removeChild(connections.lastChild);
        }
        
        // Draw a line between every pair of icons
        icons.forEach((iconA, indexA) => {
            icons.forEach((iconB, indexB) => {
                if (indexA < indexB) {
                    const rectA = iconA.getBoundingClientRect();
                    const rectB = iconB.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    
                    const x1 = rectA.left + rectA.width / 2 - containerRect.left;
                    const y1 = rectA.top + rectA.height / 2 - containerRect.top;
                    const x2 = rectB.left + rectB.width / 2 - containerRect.left;
                    const y2 = rectB.top + rectB.height / 2 - containerRect.top;
                    
                    const line = document.createElementNS(svgNamespace, 'line');
                    line.setAttribute('x1', x1);
                    line.setAttribute('y1', y1);
                    line.setAttribute('x2', x2);
                    line.setAttribute('y2', y2);
                    line.setAttribute('stroke', '#000');
                    line.setAttribute('stroke-width', '1');
                    connections.appendChild(line);
                }
            });
        });
    }
    
    // Update lines every frame
    function animate() {
        updateLines();
        requestAnimationFrame(animate);
    }
    
    animate();
});
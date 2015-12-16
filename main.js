(function() {
    'use strict';

    var nodes = [
        {id: 1, label: ''},
        {id: 2, label: ''},
        {id: 3, label: ''},
        {id: 4, label: ''}
    ];

    var edges = [
        {to: 1, from: 3},
        {to: 1, from: 2},
        {to: 2, from: 4}
    ];
    
    function renderGraph(nodes, edges) {
        nodes = new vis.DataSet(nodes);
        edges = new vis.DataSet(edges);

        var container = document.getElementById('medusa-vis');

        var data = {
            nodes: nodes,
            edges: edges
        };

        var options = {};

        var network = new vis.Network(container, data, options)

    }

    // Event handlers
    $('#submit-query').on('click', function submitQuery(evt) {
        evt.preventDefault()

        // Collect, sanitize, and validate input
        var reference = $('#reference').val().trim();
        var daysBack = $('#days-back').val().trim();
        var sources = $('input[name=sources]:checked').map(function() {
            return $(this).val();
        });

        if (reference === undefined || reference === "") {
            alert("Please enter a reference");
            return;
        }
        if (daysBack === undefined || daysBack === "") {
            alert("Please enter the number of days");
            return;
        }
        if (sources.length === 0) {
            alert("Please select at least 1 source");
            return;
        }
        // Ajax Call to Alertweb server
        // Needs to be some controller / route handler to communicate
        // with python script
        console.log(reference, daysBack, sources);
        
    });

    // Clear form controls
    $('#clear-query').on('click', function clearQuery(evt) {
        evt.preventDefault()
        $('#reference').val("");
        $('#days-back').val("");
        $('input[name=sources]:checked').each(function() {
            return $(this).prop('checked', false);
        });
    });


    // Initial Render
    renderGraph(nodes, edges);

}());

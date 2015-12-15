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
        {to: 2, from: 4},
    ];
    
    function renderGraph(nodes, edges) {
        nodes = new vis.DataSet(nodes);
        edges = new vis.DataSet(edges);

        var container = document.getElementById('vis');

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
        alert(evt);
    });

    $('#default-query').on('click', function defaultQuery(evt) {
        evt.preventDefault()
        alert(evt);
    });


    // Initial Render
    renderGraph(nodes, edges);

}());

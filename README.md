get-property-safely
==================

Creates a function to get a property out of an object if it is there; otherwise returns a default. For use as a D3 accessor.


Installation
------------

    npm install get-property-safely

Usage
-----

    var GetPropertySafely = require('get-property-safely');
    var getDeeds = GetPropertySafely('deeds', []);

    var parentA = {
      deeds: ['get groceries', 'eat sandwich']
    };
    var parentB = {};

    getDeeds(parentA);
    // ['get groceries', 'eat sandwich'] 
    getDeeds(parentB);
    // [] instead of undefined

In a D3 context:

    var deedSelection = allProjects.select('.deeds-root').selectAll('.deed');
    deedSelection.data(getDeeds, idKey);

Here, even if a project does not have a 'deeds' property, it is important for getDeeds to return some sort of array to avoid an exception in d3-selection. Hence, we use GetPropertySafely instead of:

    function simpleGetDeeds(project) {
      return project.deeds; // This could be undefined!
    }

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2017 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

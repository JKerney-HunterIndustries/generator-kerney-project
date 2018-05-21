'use strict';

describe('<%= moduleName %>', function () {
    const applicationEnvironment = require('../../applicationEnvironment');
    const testEnvironment = require('../testEnvironment');

    testEnvironment.build('approvalsConfigFactory');

    const { asInformationString } = testEnvironment.build('objectInformation');
    const { assert } = testEnvironment.build('chai');

    let <%= moduleName %>;

    beforeEach(function () {
        const testContext = applicationEnvironment.new();
        <%= moduleName %> = testContext.build('<%= moduleName %>');
    });

    it('should have a failing test -- delete this test!', function () {
        assert.isTrue(false);
    });
});

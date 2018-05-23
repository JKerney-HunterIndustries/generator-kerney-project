'use strict';

const path = require('path');
const Generator = require('yeoman-generator');

function joinPath(basePathTokens, filename) {
    return basePathTokens.concat([filename]).join(path.sep);
}

module.exports = class extends Generator {
    prompting() {
        const prompts = [
            {
                type: 'input',
                name: 'moduleName',
                message: 'Module variable name:'
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {
        const moduleName = this.props.moduleName;

        const templateValues = {
            moduleName: moduleName
        };

        let testPathTokens = ['test', 'app'];

        const copyDefinitions = [
            {
                templatePath: 'test.template.js',
                filePath: joinPath(testPathTokens, moduleName + '.test.js'),
                isTemplate: true
            }
        ];

        copyDefinitions.forEach(copyDefinition => {
            if (copyDefinition.isTemplate) {
                this.fs.copyTpl(
                    this.templatePath(copyDefinition.templatePath),
                    this.destinationPath(copyDefinition.filePath),
                    templateValues
                );
            } else {
                this.fs.copy(
                    this.templatePath(copyDefinition.templatePath),
                    this.destinationPath(copyDefinition.filePath)
                );
            }
        });

    }

};

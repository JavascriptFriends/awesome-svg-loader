

const babel = require("babel-core");
const fs = require("fs");


module.exports = function (content, map, meta) {
    
    const fileBuffer = this.fs.readFileSync(this.resourcePath);
    const svgResult = fileBuffer.toString();
    const strFn = `export default function({className}) { return (${svgResult}) }`;

    const babelOptions = {
        plugins: [
            [require.resolve("babel-plugin-inferno"), { imports: true }]
        ],
        babelrc: false
    };

    const strTranspiled = babel.transform(strFn, babelOptions);

    return strTranspiled.code;
};
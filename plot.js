import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";
export default function plotLines(parent, data, allScaleNotes) {
    let divWrapper = document.createElement('div');
    parent.append(divWrapper);

    let plotElement = Plot.plot({
        color: {
            type: "categorical"
        },
        marks: [
            Plot.ruleY(allScaleNotes, { stroke: "red", strokeWidth: 0.2 }),
            Plot.line(data, {
                x: "i",
                y: "r",
                curve: "step",
                stroke: "l"
            }),
            Plot.text(data, Plot.selectLast({
                x: "i",
                y: "r",
                z: "l",
                text: "l",
                textAnchor: "start",
                dx: 3
            }))
        ]
    })
    divWrapper.append(plotElement);
    
}

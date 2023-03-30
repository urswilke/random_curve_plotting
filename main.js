import plotLines from "./plot.js";
var data = gen_mult_arrays_flat(10, 30);
var scaleNotes = getChecked();
var allScaleNotes = getAllScaleNotes(scaleNotes);

plotLines(document.body, data, allScaleNotes);

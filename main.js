import plotLines from "./plot.js";
import * as RndNotes from "./randomNotes.js";
var data = RndNotes.gen_mult_arrays_flat(10, 30);
var scaleNotes = RndNotes.getChecked();
var allScaleNotes = RndNotes.getAllScaleNotes(scaleNotes);

plotLines(document.body, data, allScaleNotes);



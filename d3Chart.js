function drawChart(container, data) {
  const chartWidth = 400;
  const chartHeight = 400;

  const xScale = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([0, chartWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, chartHeight]);

  // This is the first and only difference: instead of creating SVG, we are appending it to container
  const svg = d3
    .select(container)
    .append('svg')
    .attr('width', chartWidth)
    .attr('height', chartHeight);

  svg
    .append("g")
    .attr("fill", 'aqua')
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", d => -yScale(d) + chartHeight)
    .attr("height", d => yScale(d))
    .attr("width", 10);
}
function plot_step(objArr) {
    Plot.plot({
        marks: [
          Plot.lineY(objArr, {x: "i", y: "r", curve: "step", strokeWidth: 1})
        ]
      })
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function genRandomByteSequence(len) {
    let seq = Array.from({length: len}, () => getRndInteger(0,127));
    return seq;
}
  
function gen_obj_arr(len) {
    arr = genRandomByteSequence(len);
    var x = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        x[i] = {i: i, r: arr[i]};
    }
    return x
}

function gen_mult_arrays(n, len) {
  let res = new Array(n);
  for (var i = 0; i < n; i++) {
    let x = gen_obj_arr(len);
    res[i] = [i.toString(), x];
  }
  return res;
}

function gen_mult_arrays_flat(n, len) {
  let mult_arr = gen_mult_arrays(n, len)
  return mult_arr.
    flatMap(([l, data]) => data.map(d => ({l, ...d})))
}
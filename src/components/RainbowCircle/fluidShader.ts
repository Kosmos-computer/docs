export type Rgb = readonly [number, number, number];

const VERTEX_SHADER = `attribute vec4 position;
void main() {
  gl_Position = position;
}`;

const FRAGMENT_SHADER = `precision mediump float;

uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

vec3 hue2rgb(float h) {
  h = fract(h);
  float r = abs(h * 6.0 - 3.0) - 1.0;
  float g = 2.0 - abs(h * 6.0 - 2.0);
  float b = 2.0 - abs(h * 6.0 - 4.0);
  return clamp(vec3(r, g, b), 0.0, 1.0);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_res.xy;
  st.x *= u_res.x / u_res.y;
  vec2 center = vec2(0.5 * u_res.y / u_res.x, 0.5);

  vec2 m = u_mouse;
  m.x *= u_res.x / u_res.y;
  float t = u_time * 0.45;

  float waveA = sin(st.x * 3.2 + t);
  float waveB = cos(st.y * 2.8 - t * 0.9);
  float waveC = sin((st.x + st.y) * 2.4 + t * 1.1);
  float blend = (waveA + waveB + waveC) / 3.0;

  float hue = fract(
    blend * 0.22 +
    t * 0.18 +
    length(st - center) * 0.35 +
    (st.x - m.x) * 0.08 +
    (st.y - m.y) * 0.08
  );

  vec3 col = hue2rgb(hue);
  col = mix(col, hue2rgb(hue + 0.12), smoothstep(-0.2, 0.6, blend) * 0.35);

  gl_FragColor = vec4(col, 1.0);
}`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export type FluidUniforms = {
  res: WebGLUniformLocation | null;
  time: WebGLUniformLocation | null;
  mouse: WebGLUniformLocation | null;
};

export type FluidProgram = {
  gl: WebGLRenderingContext;
  program: WebGLProgram;
  uniforms: FluidUniforms;
  posLoc: number;
  buffer: WebGLBuffer;
};

export function createFluidProgram(canvas: HTMLCanvasElement): FluidProgram | null {
  const gl = canvas.getContext('webgl', {alpha: false, antialias: true});
  if (!gl) return null;

  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;

  gl.useProgram(program);

  const posLoc = gl.getAttribLocation(program, 'position');
  const buffer = gl.createBuffer();
  if (!buffer) return null;

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const uniforms: FluidUniforms = {
    res: gl.getUniformLocation(program, 'u_res'),
    time: gl.getUniformLocation(program, 'u_time'),
    mouse: gl.getUniformLocation(program, 'u_mouse'),
  };

  return {gl, program, uniforms, posLoc, buffer};
}

export function drawFluidFrame(
  fluid: FluidProgram,
  width: number,
  height: number,
  timeMs: number,
  mouse: [number, number],
): void {
  const {gl, program, uniforms, posLoc, buffer} = fluid;

  gl.useProgram(program);
  gl.viewport(0, 0, width, height);
  gl.enableVertexAttribArray(posLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  gl.uniform2f(uniforms.res, width, height);
  gl.uniform1f(uniforms.time, timeMs * 0.001);
  gl.uniform2f(uniforms.mouse, mouse[0], mouse[1]);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
}

const shell = require('gl-now')()
const createShader = require('gl-shader')
const createBuffer = require('gl-buffer')
const mat4 = require('gl-mat4')

let shader, buffer
shell.on('gl-init', function () {
  const gl = shell.gl
  shader = createShader(gl, `
    uniform mat4 model;
    uniform mat4 camera;
    attribute vec3 position;
    void main() {
      gl_Position = camera * model * vec4(position, 1.0);
    }
  `, `
    void main() {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
  `)
  buffer = createBuffer(gl, [
    0.0, 0.5, 0.0,
    -0.5, -0.5, 0.0,
    0.5, -0.5, 0.0,
  ])
})

shell.on('gl-render', function () {
  const gl = shell.gl
  shader.bind()
  buffer.bind()

  const camera = mat4.create()
  mat4.perspective(camera, 45 * Math.PI / 180, shell.width / shell.height, 0.1, 1000.0)
  mat4.translate(camera, camera, [0, 0, -2])
  shader.uniforms.camera = camera

  const model = mat4.create()
  mat4.translate(model, model, [-.3, 0, 0])
  //mat4.rotate(model, model, 45, [0, 0, 1])
  mat4.scale(model, model, [.5, .5, 1])
  shader.uniforms.model = model
  shader.attributes.position.pointer()
  gl.drawArrays(gl.TRIANGLES, 0, 3)
})




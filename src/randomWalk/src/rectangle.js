/**
 * @version 1.0.0
 * @author Florentín Pérez Glez. <alu0101100654@ull.edu.es>
 * @file Contiene la implementació de la clase Rectangle, que representa
 * una línea.
 * @copyright Florentín Pérez Glez 2020
 * @since 08.04.2020
 * @exports Card
 * @desc
 * Universidad: Universidad de La Laguna.
 *
 * Asignatura: Programación de Aplicaciones Interactivas.
 *
 * Curso: 3º
 *
 * Práctica 8. Poker. Programación orientada a objetos en JS.
 *
 * Contenido detallado: Contiene la implementación de la clase Rectangle,
 * que permite representar un rectángulo.
 *
 * Referencias:
 *    - Enunciado de la práctica:
 *      https://github.com/fsande/PAI-P08-Poker/blob/master/2019-2020_p08_Poker.md
 *
 */

let Point;
let Line;
/* istanbul ignore next */
if (typeof require !== 'undefined') {
  Point = require('./point.js').Point;
  Line = require('./line.js').Line;
} else {
  Point = window.Point;
  Line = window.Line;
}

class Rectangle {
  constructor(leftUpperPoint, rightBottomPoint) {
    this._leftUpperPoint = leftUpperPoint;
    this._rightBottomPoint = rightBottomPoint;
  }

  /**
   * @desc Getter.
   * @type {Object}
   */
  get x() {
    return this._leftUpperPoint.x;
  }

  /**
   * @desc Getter.
   * @type {Object}
   */
  get y() {
    return this._leftUpperPoint.y;
  }

  /**
   * @desc Getter.
   * @type {Object}
   */
  get width() {
    return this._rightBottomPoint.x - this._leftUpperPoint.x;
  }

  /**
   * @desc Getter.
   * @type {Object}
   */
  get height() {
    return this._rightBottomPoint.y - this._leftUpperPoint.y;
  }

  /**
   * @desc Setter.
   * @type {Object}
   */
  set leftUpperPoint(point) {
    this._leftUpperPoint = point;
  }

    /**
   * @desc Setter.
   * @type {Object}
   */
  set rightBottomPoint(point) {
    this._rightBottomPoint = point;
  }

  /**
   * @desc Función que permite dibujar un rectángulo en un CANVAS
   * @param {Context} context Contexto asociado a un canvas.
   * @param {Boolean} fillRequire Indica si se desea rellenar el cuadrado.
   * @param {Number} lineWidth Grosor del punto
   */
  draw(context, fillRequire = false, lineWidth = 1) {
    if (fillRequire) {
      context.fillStyle = colour;
      context.fillRect(rectangle.x, rectangle.y, rectangle.width,
        rectangle.height);
    } else {
      context.strokeStyle = colour;
      context.lineWidth = lineWidth;
      context.strokeRect(rectangle.x, rectangle.y, rectangle.width,
        rectangle.height);
    }
  }

  /**
   * @desc Función que permite calcular el perímetro del rectángulo.
   * @return {Number} Perímetro del rectángulo.
   */
  perimeter() {
    let result = 0;
    result = result + ((new Line(this._leftUpperPoint,
      new Point(this._rightBottomPoint.x, this._leftUpperPoint.y))).length()) * 2;
    result = result + ((new Line(this._leftUpperPoint,
      new Point(this._leftUpperPoint.x, this._rightBottomPoint.y))).length()) * 2;
    return result;
  }

  /**
   * @desc Función que permite calcular el área del rectángulo.
   * @return {Number} Área del rectángulo.
   */
  area() { // WIP
    let result = 0;
    result = result + (new Line(this._leftUpperPoint,
      new Point(this._rightBottomPoint.x, this._leftUpperPoint.y))).length();
    console.log(result);
    result = result * (new Line(this._leftUpperPoint,
      new Point(this._leftUpperPoint.x, this._rightBottomPoint.y))).length();
    return result;
  }
};

/* istanbul ignore next */
if (typeof exports !== 'undefined') {
  exports.Rectangle = Rectangle;
} else { 
  window.Rectangle = Rectangle;
}

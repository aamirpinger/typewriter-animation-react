import React, { Component } from 'react';
import './TypeIn.css';

class TypeIn extends Component {
  state = {
    txtArr: [],
    arrayToBeRendered: [],
    parentTransition: 'fadeIn',
    show: true,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      txtArr: nextProps.type === 'word' ? nextProps.text.split(/(\s+)/) : nextProps.text.split(''),
      animation: nextProps.animation || '',
      customClass: nextProps.class || '',
      speed: nextProps.speed || '200',
      onComplete: nextProps.onComplete,
      parentTransition: nextProps.transitionIn || 'fadeIn',
      transitionOut: nextProps.transitionOut || 'fadeOutLeft',
      delay: nextProps.delay || '200',
      infiniteTransitionIn: nextProps.infiniteTransitionIn || false,
      repeat: nextProps.repeat || false,
      show: nextProps.show === true,
    };
  }

  componentDidMount() {
    const { delay } = this.state;
    setTimeout(() => {
      this.typeWriter();
    }, delay);
  }

  typeWriter = () => {
    const { txtArr, arrayToBeRendered, animation, delay, repeat, speed, onComplete } = this.state;
    if (txtArr.length !== arrayToBeRendered.length) {
      arrayToBeRendered.push(
        <span key={arrayToBeRendered.length} className={`animated ${animation}`}>
          {txtArr[arrayToBeRendered.length]}
        </span>
      );

      this.setState({ arrayToBeRendered });
      setTimeout(() => {
        this.typeWriter();
      }, speed);
    } else {
      if (repeat) {
        setTimeout(() => {
          this.setState({ arrayToBeRendered: [] });
          this.typeWriter();
        }, delay);
      }
      return onComplete && onComplete();
    }
  };

  render() {
    const {
      arrayToBeRendered,
      customClass,
      infiniteTransitionIn,
      parentTransition,
      show,
    } = this.state;

    return (
      <div>
        {show && (
          <p
            className={`type-effect-p animated 
                    ${infiniteTransitionIn && 'infinite'} 
                    ${parentTransition} ${customClass}`}
          >
            {arrayToBeRendered}
          </p>
        )}
      </div>
    );
  }
}

export default TypeIn;

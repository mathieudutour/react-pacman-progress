;(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('react'));
  } else if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else {
    root.PacmanProgress = factory(root.React);
  }
})(this, function componentFactory(React) {
  var PacmanProgress = React.createClass({displayName: 'PacmanProgress',
    propTypes: {
      classNamespace: React.PropTypes.string,
      items: React.PropTypes.number.isRequired,
      currentIndex: React.PropTypes.number.isRequired,
      onClick: React.PropTypes.func
    },

    getDefaultProps: function() {
      return {
        classNamespace: '',
        onClick: function() {}
      };
    },

    getPacmanClass() {
      return this.props.classNamespace +
             'pacman ' +
             this.props.classNamespace +
             (this.props.currentIndex % 2 ? 'odd' : 'even');
    },

    getProgressClass() {
      const className = [this.props.classNamespace + 'pacman-progress'];
      if (this.props.currentIndex >= this.props.items) {
        className.push(this.props.classNamespace + 'complete');
      } else {
        className.push(this.props.classNamespace + 'not-complete');
      }
      return className.join(' ');
    },

    getPointClass(i) {
      const className = [this.props.classNamespace + 'point'];
      if (this.props.currentIndex > i) {
        className.push(this.props.classNamespace + 'done');
      } else if (this.props.currentIndex === i) {
        className.push(this.props.classNamespace + 'current');
      } else {
        className.push(this.props.classNamespace + 'not-done');
      }
      return className.join(' ');
    },

    getPointPosition(i) {
      const position = {
        top: '-5px',
        left: (5 + 20 * (i - this.props.items / 2)) + 'px'
      };
      return position;
    },

    render: function() {
      return (
        React.createElement('div', {className: this.getProgressClass()},
          React.createElement('div', {
            className: this.getPacmanClass(),
            style: this.getPointPosition(this.props.currentIndex),
            onClick: this.props.onClick.bind(this, this.props.currentIndex, true)
          }),
            Array.apply(null, Array(this.props.items)).map(function(item, i) {
              return (
                React.createElement('div', {
                  className: this.getPointClass(i),
                  style: this.getPointPosition(i),
                  key: 'pacman-progress-' + i,
                  onClick: this.props.onClick.bind(this, i, false)
                })
              );
            }.bind(this))
        )
      );
    }
  });

  return PacmanProgress;
});

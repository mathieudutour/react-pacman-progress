# react-pacman-progress

> Simple [React](http://facebook.github.io/react/index.html) component for a fun progress indicator.

### [Demo](https://mathieudutour.github.io/react-pacman-progress)

[![Demo](https://cdn.rawgit.com/mathieudutour/react-pacman-progress/master/example/demo.gif "Demo")](https://github.com/mathieudutour/react-pacman-progress/blob/master/example/index.html)

## Install

```bash
npm install react-pacman-progress --save
```

or

```bash
bower install react-pacman-progress --save
```

## Example

Controlled usage:

```javascript
var PacmanProgress = require('react-pacman-progress');

var App = React.createClass({
  getInitialState() {
    return {currentIndex: 0};
  },
  render() {
    var slides = [
      {color: '#c0ffee'},
      {color: '#deface'},
      {color: '#0ff1ce'}
    ]
    return (
      <div className="container" onCLick={this.handleClick}>
        {
          slides.map(function(slide, i) {
            return <Slide index={i} currentIndex={this.state.currentIndex} color={slide.color} />;
          }.bind(this))
        }
        <PacmanProgress items={slides.length} currentIndex={this.state.currentIndex} />
      </div>
    );
  },

  handleClick: function() {
    this.setState({currentIndex: this.state.currentIndex + 1});
  }
});
```

## API

### Props

##### classNamespace

Namespace for CSS classes, _optional_, default is `` i.e CSS classes are `'' + 'pacman'`.

##### items

Number of dots for pacman to eat. _required_

##### currentIndex

Position of the pacman. Start at 0. _required_

##### onClick

Function to call when clicking on a dot. _optional_, it takes 3 arguments:
  * index of the dot clicked
  * whether it was pacman which was clicked or not
  * the event

```
handleClickPacman(index, isPacman, e) {
  e.preventDefault();
  this.setState({currentIndex: index});
}
```

## Styles

Look at [react-pacman-progress.css](https://github.com/mathieudutour/react-pacman-progress/blob/master/react-pacman-progress.css) for an idea on how to style this component.

---

MIT Licensed

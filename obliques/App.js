import React from 'react';
import Aux from './hoc/Aux';
import { Text, Image, View, StyleSheet, Dimensions, Platform, PixelRatio, TouchableOpacity, Animated, Easing} from 'react-native';
import { Asset, AppLoading, Font } from 'expo';

const _ = require('lodash');


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0);
    this.state = { 
    strategies: _.sample([
      "Remove specifics and convert to ambiguities",
      "Think of the radio",
      "Don't be frightened of clichés",
      "Allow an easement (easement: abandonment of a stricture)",
      "What is the reality of the situation?",
      "Simple subtraction",
      "Are there sections? Consider transitions",
      "Turn it upside down",
      "Go slowly all the way around the outside",
      "A line has two sides",
      "Infinitesimal gradations",
      "Make an exhaustive list of everything you might do and do the last thing on the list",
      "Change instrument roles",
      "Into the impossible",
      "Accretion: gradual accumulation of additional layers",
      "Ask people to work against their better judgment",
      "Disconnect from desire",
      "Take away the elements in order of apparent non-importance",
      "Emphasize repetitions",
      "Change instrument roles",
      "Don't be afraid of things because they are easy to do",
      "Is there something missing?",
      "Don't be frightened to display your talents",
      "Use unqualified people",
      "Breathe more deeply",
      "How would you have done it?",
      "Honor thy error as a hidden intention :)",
      "Emphasize differences",
      "Only one element of each kind",
      "Do nothing for as long as possible",
      "Bridges: build | burn",
      "Water",
      "You don't have to be ashamed of using your own ideas",
      "Make a sudden, destructive, unpredictable action; incorporate",
      "Tidy up",
      "Consult other sources",
      "Do the words need changing?",
      "Use an acceptable color",
      "Ask your body",
      "Humanize something free of error",
      "Use filters",
      "Balance the consistency principle with the inconsistency principle",
      "Fill every beat with something",
      "Discard an axiom",
      "Listen to the quiet voice",
      "What wouldn't you do?",
      "Is it finished?",
      "Decorate, decorate",
      "Put in earplugs",
      "Give the game away",
      "Reverse",
      "Abandon normal instruments",
      "Trust in the you of now :)",
      "Use fewer notes",
      "What would your closest friend do?",
      "Repetition is a form of change",
      "Distorting time",
      "Give way to your worst impulse",
      "Make a blank valuable by putting it in an exquisite frame",
      "...",
      "The inconsistency principle",
      "Ghost echoes",
      "Don't break the silence",
      "You can only make one dot at a time",
      "Discover the recipes you are using and abandon them",
      "Just carry on",
      "Cascades",
      "(Organic) machinery",
      "Courage!",
      "What mistakes did you make last time?",
      "You are an engineer",
      "Consider different fading systems",
      "Remove ambiguities and convert to specifics",
      "Mute and continue",
      "Look at the order in which you do things",
      "It is quite possible (after all)",
      "Go outside. Shut the door",
      "Don't stress one thing more than another",
      "Do we need holes?",
      "Clear analysis",
      "Work at a different speed",
      "Do something boring",
      "Look closely at the most embarrassing details and amplify them",
      "Define an area as 'safe' and use it as an anchor",
      "Mechanicalize something idiosyncratic",
      "Overtly resist change",
      "Emphasize the flaws",
      "Accept advice",
      "Remember those quiet evenings",
      "Take a break",
      "The tape is now the music",
      "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
      "Imagine the music as a moving chain or caterpillar",
      "Use an old idea",
      "Intentions: credibility of | nobility of | humility of",
      "Destroy: nothing | the most important thing",
      "Imagine the music as a set of disconnected events",
      "Change nothing and continue with immaculate consistency",
      "What are you really thinking about just now? Incorporate",
      "Children's voices: speaking | singing",
      "Assemble some of the instruments in a group and treat the group",
      "Feedback recordings into an acoustic situation",
      "Shut the door and listen from outside",
      "Towards the insignificant",
      "Is the tuning appropriate?",
      "Simply a matter of work",
      "Look at a very small object, look at its center",
      "Not building a wall but making a brick",
      "Revaluation (a warm feeling)",
      "Disciplined self-indulgence",
      "The most important thing is the thing most easily forgotten",
      "Always first steps",
      "Idiot glee",
      "Question the heroic approach",
      "Be EXTRAvagant",
      "Always give yourself credit for having more than personality",
      "State the problem in words as clearly as possible",
      "Faced with a choice, do both",
      "Tape your mouth",
      "Twist the spine",
      "Get your neck massaged",
      "Lowest common denominator check: single beat | single note | single riff",
      "Do the washing up",
      "Listen in total darkness or in a very large room, very quietly",
      "Convert a melodic element into a rythmic element",
      "Would anybody want it?",
      "Spectrum analysis",
      "Retrace your steps",
      "Go to an extreme, move back to a more comfortable place",
      "Once the search is in progress, something will be found",
      "Only a part, not the whole",
      "From nothing to more than nothing",
      "Be less critical more often"]),
      fontLoaded: false,
      isSeen: false,
      loaded: false
  };
};

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-LightItalic': require('./assets/OpenSans-LightItalic.ttf'),
    });
    this.setState({ 
      fontLoaded: true,
      loaded: true
    });
    this.animate();
  }

  animate() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 6000,
        easing: Easing.log
      }
    ).start()
  }

  onTouch = () => {
    this.setState({
      strategies: _.sample([
        "Remove specifics and convert to ambiguities",
        "Think of the radio",
        "Don't be frightened of clichés",
        "Allow an easement (easement: abandonment of a stricture)",
        "What is the reality of the situation?",
        "Simple subtraction",
        "Are there sections? Consider transitions",
        "Turn it upside down",
        "Go slowly all the way around the outside",
        "A line has two sides",
        "Infinitesimal gradations",
        "Make an exhaustive list of everything you might do and do the last thing on the list",
        "Change instrument roles",
        "Into the impossible",
        "Accretion: gradual accumulation of additional layers",
        "Ask people to work against their better judgment",
        "Disconnect from desire",
        "Take away the elements in order of apparent non-importance",
        "Emphasize repetitions",
        "Change instrument roles",
        "Don't be afraid of things because they are easy to do",
        "Is there something missing?",
        "Don't be frightened to display your talents",
        "Use unqualified people",
        "Breathe more deeply",
        "How would you have done it?",
        "Honor thy error as a hidden intention :)",
        "Emphasize differences",
        "Only one element of each kind",
        "Do nothing for as long as possible",
        "Bridges: build | burn",
        "Water",
        "You don't have to be ashamed of using your own ideas",
        "Make a sudden, destructive, unpredictable action; incorporate",
        "Tidy up",
        "Consult other sources",
        "Do the words need changing?",
        "Use an acceptable color",
        "Ask your body",
        "Humanize something free of error",
        "Use filters",
        "Balance the consistency principle with the inconsistency principle",
        "Fill every beat with something",
        "Discard an axiom",
        "Listen to the quiet voice",
        "What wouldn't you do?",
        "Is it finished?",
        "Decorate, decorate",
        "Put in earplugs",
        "Give the game away",
        "Reverse",
        "Abandon normal instruments",
        "Trust in the you of now :)",
        "Use fewer notes",
        "What would your closest friend do?",
        "Repetition is a form of change",
        "Distorting time",
        "Give way to your worst impulse",
        "Make a blank valuable by putting it in an exquisite frame",
        "...",
        "The inconsistency principle",
        "Ghost echoes",
        "Don't break the silence",
        "You can only make one dot at a time",
        "Discover the recipes you are using and abandon them",
        "Just carry on",
        "Cascades",
        "(Organic) machinery",
        "Courage!",
        "What mistakes did you make last time?",
        "You are an engineer",
        "Consider different fading systems",
        "Remove ambiguities and convert to specifics",
        "Mute and continue",
        "Look at the order in which you do things",
        "It is quite possible (after all)",
        "Go outside. Shut the door",
        "Don't stress one thing more than another",
        "Do we need holes?",
        "Clear analysis",
        "Work at a different speed",
        "Do something boring",
        "Look closely at the most embarrassing details and amplify them",
        "Define an area as 'safe' and use it as an anchor",
        "Mechanicalize something idiosyncratic",
        "Overtly resist change",
        "Emphasize the flaws",
        "Accept advice",
        "Remember those quiet evenings",
        "Take a break",
        "The tape is now the music",
        "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
        "Imagine the music as a moving chain or caterpillar",
        "Use an old idea",
        "Intentions: credibility of | nobility of | humility of",
        "Destroy: nothing | the most important thing",
        "Imagine the music as a set of disconnected events",
        "Change nothing and continue with immaculate consistency",
        "What are you really thinking about just now? Incorporate",
        "Children's voices: speaking | singing",
        "Assemble some of the instruments in a group and treat the group",
        "Feedback recordings into an acoustic situation",
        "Shut the door and listen from outside",
        "Towards the insignificant",
        "Is the tuning appropriate?",
        "Simply a matter of work",
        "Look at a very small object, look at its center",
        "Not building a wall but making a brick",
        "Revaluation (a warm feeling)",
        "Disciplined self-indulgence",
        "The most important thing is the thing most easily forgotten",
        "Always first steps",
        "Idiot glee",
        "Question the heroic approach",
        "Be EXTRAvagant",
        "Always give yourself credit for having more than personality",
        "State the problem in words as clearly as possible",
        "Faced with a choice, do both",
        "Tape your mouth",
        "Twist the spine",
        "Get your neck massaged",
        "Lowest common denominator check: single beat | single note | single riff",
        "Do the washing up",
        "Listen in total darkness or in a very large room, very quietly",
        "Convert a melodic element into a rythmic element",
        "Would anybody want it?",
        "Spectrum analysis",
        "Retrace your steps",
        "Go to an extreme, move back to a more comfortable place",
        "Once the search is in progress, something will be found",
        "Only a part, not the whole",
        "From nothing to more than nothing",
        "Be less critical more often"]),
        isSeen: true,
    });
  }


  render() {
    if (!this.state.loaded) {
      return (
        <AppLoading />
      )
    } 

    let opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    });

    return (
      <Aux style={styles.aux}>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0} style={styles.touch} onPress={() => this.onTouch()}>
            <Animated.View style={{opacity: opacity }}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.strategies}>
                    {this.state.strategies}
                  </Text>
                ) : null
              }
            </Animated.View>
          </TouchableOpacity>
        </View>
      </Aux>
    );
  }
}

const styles = StyleSheet.create({
  aux: {
    backgroundColor: '#000000',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    alignSelf: 'stretch',
  },
  touch: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  strategies: {
    flexWrap: 'wrap',
    margin: 5,
    padding: 5,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'OpenSans-LightItalic',
    color: '#FFFFFF',
  },
  landscapeContainer: {
    flexDirection: "row",
    width: "100%"
  },
  potraitContainer: {
    flexDirection: "column",
    width: "100%"
  }
});

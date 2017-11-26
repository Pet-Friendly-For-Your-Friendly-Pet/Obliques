import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';


let strategies = {
	strategy1: "Remove specifics and convert to ambiguities",
	strategy2: "Think of the radio",
	strategy3: "Don't be frightened of clichés",
	strategy4: "Allow an easement (easement: abandonment of a stricture)"
	strategy5: "What is the reality of the situation?",
	strategy6: "Simple subtraction",
	strategy7: "Are there sections? Consider transitions",
	strategy8: "Turn it upside down",
	strategy9: "Go slowly all the way round the outside",
	strategy10: "A line has two sides",
	strategy11: "Infinitesimal gradations",
	strategy12: "Make an exhaustive list of everything you might do and do the last thing on the list",
	strategy13: "Change instrument roles",
	strategy14: "Into the impossible",
	strategy15: "Accretion: gradual accumulation of additional layers",
	strategy16: "Ask people to work against their better judgment",
	strategy17: "Disconnect from desire",
	strategy18: "Take away the elements in order of apparent non-importance",
	strategy19: "Emphasize repetitions",
	strategy20: "Change instrument roles",
	strategy21: "Don't be afraid of things becuase they are easy to do",
	strategy22: "Is there something missing?",
	strategy23: "Don't be frightened to display your talents",
	strategy24: "Use unqualified people",
	strategy25: "Breathe more deeply",
	strategy26: "How would you have done it?",
	strategy27: "Honor thy error as a hidden intention :)",
	strategy28: "Emphasize differences",
	strategy29: "Only one element of each kind",
	strategy30: "Do nothing for as long as possible",
	strategy31: "Bridges: build | burn",
	strategy32: "Water",
	strategy33: "You don't have to be ashamed of using your own ideas",
	strategy34: "Make a sudden, destructive, unpredictable action; incorporate",
	strategy35: "Tidy up",
	strategy36: "Consult other sources",
	strategy37: "Do the words need changing?",
	strategy38: "Use an acceptable color",
	strategy39: "Ask your body",
	strategy40: "Humanize something free of error",
	strategy41: "Use filters",
	strategy42: "Balance the consistency principle with the inconsistency principle",
	strategy43: "Fill every beat with something",
	strategy44: "Discard an axiom",
	strategy45: "Listen to the quiet voice",
	strategy46: "What wouldn't you do?",
	strategy47: "Is it finished?",
	strategy48: "Decorate, decorate",
	strategy49: "Put in earplugs",
	strategy50: "Give the game away",
	strategy51: "Reverse",
	strategy52: "Abandon normal instruments",
	strategy53: "Trust in the you of now :)",
	strategy54: "Use fewer notes",
	strategy55: "What would your closest friend do?",
	strategy56: "Repetition is a form of change",
	strategy57: "Distorting time",
	strategy58: "Give way to your worst impulse",
	strategy59: "Make a blank valuable by putting it in an exquisite frame"
	strategy60: "",
	strategy61: "The inconsistency principle",
	strategy62: "Ghost echoes",
	strategy63: "Don't break the silence",
	strategy64: "You can only make one dot at a time",
	strategy65: "Discover the recipes you are using and abandon them",
	strategy66: "Just carry on",
	strategy67: "Cascades",
	strategy68: "(Organic) machinery",
	strategy69: "Courage!",
	strategy70: "What mistakes did you make last time?",
	strategy71: "You are an engineer",
	strategy72: "Consider different fading systems",
	strategy73: "Remove ambiguities and convert to specifics",
	strategy74: "Mute and continue",
	strategy75: "Look at the order in which you do things",
	strategy76: "It is quite possible (after all)",
	strategy77: "Go outside. Shut the door",
	strategy78: "Don't stress on thing more than another",
	strategy79: "Do we need holes?",
	strategy80: "Clear analysis",
	strategy81: "Work at a different speed",
	strategy82: "Do something boring",
	strategy83: "Look closely at the most embarrassing details and amplify them",
	strategy84: "Define an area as 'safe' and use it as an anchor",
	strategy85: "Mechanicalize something idiosyncratic",
	strategy86: "Overtly resist change",
	strategy87: "Emphasize the flaws",
	strategy88: "Accept advice",
	strategy89: "Remember those quiet evenings",
	strategy90: "Take a break",
	strategy91: "The tape is now the music",
	strategy92: "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
	strategy93: "Imagine the music as a moving chain or caterpillar",
	strategy94: "Use an old idea",
	strategy95: "Intentions: credibility of | nobility of | humility of",
	strategy96: "Destroy: nothing | the most important thing",
	strategy97: "Imagine the music as a set of disconnected events",
	strategy98: "Change nothing and continue with immaculate consistency",
	strategy99: "What are you really thinking about just now? Incorporate",
	strategy100: "Children's voices: speaking | singing",
	strategy101: "Assemble some of the instruments in a group and treat the group",
	strategy102: "Feedback recordings into an acoustic situation",
	strategy103: "Shut the door and listen from outside",
	strategy104: "Towards the insignificant",
	strategy105: "Is the tuning appropriate?",
	strategy106: "Simply a matter of work",
	strategy107: "Look at a very small object, look at its center",
	strategy108: "Not building a wall but making a brick",
	strategy109: "Revaluation (a warm feeling)",
	strategy110: "Disciplined self-indulgence",
	strategy111: "The most important thing is the thing most easily forgotten",
	strategy112: "Always first steps",
	strategy113: "Idiot glee",
	strategy114: "Question the heoric approach",
	strategy115: "Be EXTRAvagant",
	strategy116: "Always give yourself credit for having more than personality",
	strategy117: "State the problem in words as clearly as possible",
	strategy118: "Faced with a choice, do both",
	strategy119: "Tape your mouth",
	strategy120: "Twist the spine",
	strategy121: "Get your neck massaged",
	strategy122: "Lowest common denominator check: single beat | single note | single riff",
	strategy123: "Do the washing up",
	strategy124: "Listen in total darkness or in a very large room, very quietly",
	strategy125: "Convert a melodic element into a rythmic element",
	strategy126: "Would anybody want it?",
	strategy127: "Spectrum analysis",
	strategy128: "Retrace your steps",
	strategy129: "Go to an extreme, move back to a more comfortable place",
	strategy130: "Once the search is in progress, something will be found",
	strategy131: "Only a part, not the whole",
	strategy132: "From nothing to more than nothing",
	strategy133: "Be less critical more often",
};

let strategyArray = [];

for (var prop in obj) {
	if(obj.hasOwnProperty(prop)) {
		strategyArray.push(prop);
	}
}



export default class Obliques extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Obliques</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF'
	},
});
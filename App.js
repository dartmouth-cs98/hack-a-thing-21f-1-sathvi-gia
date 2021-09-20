import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
	NoteOne,
	NoteTwo,
	NoteThree,
	NoteFour,
	NoteFive,
	NoteSix,
	NoteSeven
} from './constants/Colors'

const xyloSounds = {
	one: require('./assets/note1.wav'),
	two: require('./assets/note2.wav'),
	three: require('./assets/note3.wav'),
	four: require('./assets/note4.wav'),
	five: require('./assets/note5.wav'),
	six: require('./assets/note6.wav'),
	seven: require('./assets/note7.wav')
}

export default function App() {
  return (
    <View style={styles.container}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteOne }]}
					onPress={() => this.handlePlaySound('one')}
				>
					<Text style={styles.buttonText}>Note 1</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteTwo }]}
					onPress={() => this.handlePlaySound('two')}
				>
					<Text style={styles.buttonText}>Note 2</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteThree }]}
					onPress={() => this.handlePlaySound('three')}
				>
					<Text style={styles.buttonText}>Note 3</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteFour }]}
					onPress={() => this.handlePlaySound('four')}
				>
					<Text style={styles.buttonText}>Note 4</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteFive }]}
					onPress={() => this.handlePlaySound('five')}
				>
					<Text style={styles.buttonText}>Note 5</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteSix }]}
					onPress={() => this.handlePlaySound('six')}
				>
					<Text style={styles.buttonText}>Note 6</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: NoteSeven }]}
					onPress={() => this.handlePlaySound('seven')}
				>
					<Text style={styles.buttonText}>Note 7</Text>
				</TouchableOpacity>
			</View>
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		borderRadius: 25,
		marginTop: 50
	},
	buttonContainer: {
		height: 40,
		margin: 5
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 18
	}
})
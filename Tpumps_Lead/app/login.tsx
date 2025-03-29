 import { useState } from 'react';
 import { StyleSheet } from 'react-native';
 import { ThemedText } from '@/components/ThemedText';
 import { ThemedView } from '@/components/ThemedView';
 import { auth } from '../firebase'
 import { FirebaseError } from 'firebase/app';
 import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signUp = async () => {
        setLoading(true)
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Check your email!');
        } catch (e: any) {
            const err = e as FirebaseError;
            alert('Registration failed: ' + err.message)
        } finally {
            setLoading(false);
        }
    };

    const signIn = async () => {
        setLoading(true);
        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch (e: any) {
            const err = e as FirebaseError;
            alert('Sign in faild: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemedView>
            <ThemedText>Login</ThemedText>
        </ThemedView>
    );
}
 const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		flex: 1,
		justifyContent: 'center'
	},
	input: {
		marginVertical: 4,
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		padding: 10,
		backgroundColor: '#fff'
	}
});
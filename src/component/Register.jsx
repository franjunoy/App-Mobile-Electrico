import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import Button from '../../components/ReusableComponents/Buttons/Button';
import ButtonArrow from '../../components/ReusableComponents/Buttons/ButtonArrow';
import AppleSVG from '../../../assets/svg/loginRegister/AppleSVG';
import GoogleSVG from '../../../assets/svg/loginRegister/GoogleSVG';
import FacebookSVG from '../../../assets/svg/loginRegister/FacebookSVG';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { registerRequest } from '../../peticiones/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCursoName } from '../../screens/peticiones/mobile';
import Dropdown from './Dropdown';
import { setUsers } from '../../screens/redux/reducer/userReducer';
import { useDispatch } from 'react-redux';
import {
  setFormaciones,
  setModulos,
  setTemas
} from '../../screens/redux/reducer/cursoRedurcer';

const RegisterComponent = ({ title, subTitle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSlectedOption] = useState();
  const navigation = useNavigation();
  const [cursoId, setCursoId] = useState('');
  const [courseName, setCourseName] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFormations = async () => {
      try {
        await getCursoName({
          success: (data) => setCourseName(data.payload),
          error: (err) => console.log(err),
          loading: (isLoading) => console.log(isLoading)
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchFormations();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      const elemento = courseName.filter(
        (ele) => ele.nombre === selectedOption
      );

      setCursoId(elemento[0]._id);
    }
  }, [selectedOption]);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        registerRequest({
          success: (v) => {
            AsyncStorage.setItem('Token', v.payload.token), setName('');
            setEmail('');
            setPassword('');
            dispatch(setFormaciones(v.payload.user.formacion));
            dispatch(setModulos(v.payload.user.formacion.modulos));
            dispatch(setUsers(v.payload.user));
            navigation.navigate('LoginScreen');
          },
          error: (e) => console.log(e),
          loading: (l) => console.log('cargando', l),
          email,
          name,
          cursoId
        });
      }
    } catch (error) {
      Alert.alert(error.code, error.message);
    }
  };

  return (
    <View className='flex flex-col items-center w-full'>
      <View className='flex flex-row items-center w-full'>
        <View>
          <ButtonArrow />
        </View>
        <View className=' flex-1 mr-14'>
          <Text className='text-center text-zinc-900 text-xl font-bold mt-3'>
            Registro
          </Text>
        </View>
      </View>
      <ScrollView>
        <View className='w-[358px] items-center mt-2'>
          <View className=' h-[40px] mt-3 justify-center items-start'>
            <Text className='text-center text-teal-900 text-2xl font-bold'>
              {title}
            </Text>
          </View>
          <View className=' h-[65px] justify-center items-start'>
            <Text className='text-gray-500 text-sm'>{subTitle}</Text>
          </View>

          <View>
            <Text className=' text-teal-900 text-base'>Nombre</Text>
            <TextInput
              className='w-[320px] h-[40px] mt-2 border border-teal-900 rounded-lg px-2'
              placeholder='Ingresa tu nombre'
              value={name}
              onChangeText={setName}
              keyboardType='name'
              autoCapitalize='none'
            />
          </View>

          <View className=' mt-4'>
            <Text className='text-teal-900 text-base'>Email</Text>
            <TextInput
              className='w-[320px] mt-2 h-[40px] border border-teal-900 rounded-lg px-2'
              placeholder='Ingresa tu email'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>

          <View className='top-4'>
            <Text className='text-teal-900 text-base'>Contraseña</Text>
            <TextInput
              className='w-[320px] mt-2 h-[40px] border border-teal-900 rounded-lg px-2'
              placeholder='Ingresa tu contraseña'
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View className='w-[322px] h-[40px] top-8'>
            <Text className=' text-teal-900 text-base'>
              Selecciona un curso
            </Text>
            <View className='top-1'>
              <Dropdown
                options={courseName?.map((ele) => ele?.nombre)}
                selectedOption={selectedOption}
                onSelect={setSlectedOption}
              />
            </View>
          </View>

          <View className='w-[300px] h-[50px] mt-24 justify-center items-center'>
            <Button text='Prueba gratis' onPress={handleRegister} />
          </View>

          <View className='mt-12 flex flex-col items-center'>
            <Text className='text-[#6C6C6C] text-xs mb-2'>
              O registrate con
            </Text>
            <View className='flex flex-row mt-2'>
              <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                <GoogleSVG />
              </TouchableOpacity>
              <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                <AppleSVG />
              </TouchableOpacity>
              <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                <FacebookSVG />
              </TouchableOpacity>
            </View>
          </View>

          <View className=' items-center justify-center top-14 flex flex-col'>
            <Text className='text-[#6C6C6C] text-x'>
              Al registrarte aceptas nuestros
            </Text>
            <TouchableOpacity>
              <Text className='border-teal-900 text-x underline'>
                terminos y condiciones de uso
              </Text>
            </TouchableOpacity>
          </View>
          <View className='h-[180px]'></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterComponent;

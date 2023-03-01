// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig} from 'axios';
const api = axios.create({baseURL: 'http://10.0.2.2:7072/rooms/api/v1/'});

// api.interceptors.request.use(async (config: AxiosRequestConfig) => {
//   const token = await AsyncStorage.getItem('token');
//   const email = (await AsyncStorage.getItem('email')) || '';
//   if (!token) {
//     return config;
//   }
//   config.headers = {Authorization: `Bearer ${token}`};
//   config.url = config.url?.replace(/:email/g, email);
//   if (config.data) {
//     const matchKey = Object.keys(config.data).find(
//       k => config.data[k] === '$email',
//     );
//     if (matchKey) {
//       config.data = {
//         ...config.data,
//         [matchKey]: email,
//       };
//     }
//   }
//   return config;
// });

const searchRoom = (
  capacity: number,
  date: string,
  startTime: string,
  endTime: string,
) => {
  /* return api.get('rooms', {
    params: {
      capacity,
      date,
      startTime,
      endTime,
    },
  }); */
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            name: 'Meeting Room 1',
            capacity: 10,
          },
          {
            name: 'Meeting Room 2',
            capacity: 12,
          },
          {
            name: 'Meeting Room 3',
            capacity: 18,
          },
          {
            name: 'Meeting Room 4',
            capacity: 25,
          },
        ],
      });
    }, 1000);
  });
};

const bookRoom = (
  nbPeople: number,
  date: string,
  startTime: string,
  endTime: string,
  roomName: string,
) => {
  // return api.post('users/:email/bookings', {
  //   date,
  //   startTime,
  //   endTime,
  //   roomName,
  //   nbPeople,
  //   userId: '$email',
  // });
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({
        data: {
          userId: 'U001',
          bookingId: 'B001',
          date: '20231010',
          startTime: '0800',
          endTime: '1000',
          nbPeople: 8,
          roomName: 'Meeting Room 1',
        },
      });
    }, 1000);
  });
};

const getHistory = () => {
  // return api.get('users/:email/bookings');
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            bookingId: 'B001',
            date: '20231010',
            startTime: '0800',
            endTime: '1000',
            nbPeople: 8,
            roomName: 'Meeting Room 1',
          },
        ],
      });
    }, 1000);
  });
};

const cancelBooking = (bookingId: string) => {
  console.log(
    '🚀 ~ file: RoomService.ts:118 ~ cancelBooking ~ bookingId:',
    bookingId,
  );
  // api.delete(`users/:email/bookings/${bookingId}`);
};

export default {
  searchRoom,
  bookRoom,
  getHistory,
  cancelBooking,
};

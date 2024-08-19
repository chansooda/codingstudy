import React, { useState } from 'react';
import './App.css';

function App() {
  const [recommendation, setRecommendation] = useState('');
  const [details, setDetails] = useState('');
  const [info, setInfo] = useState('');
  const [sets, setSets] = useState('');
  const [time, setTime] = useState('');
  const [instructions, setInstructions] = useState('');
  const [equipment, setEquipment] = useState('');

  const exercises = {
    '상체': {
      '가슴': {
        exercises: ['푸쉬업', '벤치프레스', '덤벨 프레스'],
        info: {
          '푸쉬업': {
            description: '팔을 굽혔다 펴면서 가슴과 팔을 강화하는 운동.',
            equipment: '자유 체중',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 팔을 어깨 너비로 벌리고 바닥에 손을 대고 엎드린다. 2. 팔꿈치를 굽히며 몸을 낮춘다. 3. 팔을 펴면서 원래 자세로 돌아간다.'
          },
          '벤치프레스': {
            description: '바벨을 가슴 위로 올리는 운동으로 가슴을 강화합니다.',
            equipment: '바벨, 벤치',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 벤치에 눕고 바벨을 가슴 위에 위치시킨다. 2. 바벨을 천천히 가슴 쪽으로 내린다. 3. 바벨을 밀어 올려 원래 위치로 돌아간다.'
          },
          '덤벨 프레스': {
            description: '덤벨을 들고 가슴을 강화하는 운동.',
            equipment: '덤벨, 벤치',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 벤치에 누워 덤벨을 양 손에 들고 가슴 위에 위치시킨다. 2. 덤벨을 천천히 내려가며 가슴을 자극한다. 3. 덤벨을 밀어 올려 원래 위치로 돌아간다.'
          }
        }
      },
      '등': {
        exercises: ['랫풀다운', '덤벨 로우', '바벨 로우'],
        info: {
          '랫풀다운': {
            description: '상체를 당기는 기계로 등 근육을 강화합니다.',
            equipment: '랫풀다운 머신',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 앉아서 바를 잡고 팔을 쭉 뻗는다. 2. 팔꿈치를 굽혀 바를 가슴 쪽으로 당긴다. 3. 천천히 팔을 원래 위치로 되돌린다.'
          },
          '덤벨 로우': {
            description: '덤벨을 사용하여 등 근육을 강화하는 운동.',
            equipment: '덤벨',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 상체를 기울이고 덤벨을 한 손에 잡는다. 2. 팔꿈치를 굽혀 덤벨을 상체 쪽으로 당긴다. 3. 천천히 덤벨을 내려놓는다.'
          },
          '바벨 로우': {
            description: '바벨을 사용하여 등 근육을 강화합니다.',
            equipment: '바벨',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 상체를 기울이고 바벨을 두 손에 잡는다. 2. 팔꿈치를 굽혀 바벨을 상체 쪽으로 당긴다. 3. 천천히 바벨을 내려놓는다.'
          }
        }
      },
      '어깨': {
        exercises: ['숄더프레스', '레터럴 레이즈', '프론트 레이즈'],
        info: {
          '숄더프레스': {
            description: '어깨를 강화하는 운동으로 바벨을 위로 들어올립니다.',
            equipment: '바벨',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 바벨을 어깨 높이에서 시작한다. 2. 바벨을 위로 들어 올린다. 3. 천천히 바벨을 원래 위치로 내린다.'
          },
          '레터럴 레이즈': {
            description: '덤벨을 옆으로 들어 어깨를 강화합니다.',
            equipment: '덤벨',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 덤벨을 양 손에 들고 옆으로 들어올린다. 2. 어깨가 평행하게 되도록 덤벨을 올린다. 3. 천천히 덤벨을 원래 위치로 내린다.'
          },
          '프론트 레이즈': {
            description: '덤벨을 앞으로 들어 어깨를 강화합니다.',
            equipment: '덤벨',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 덤벨을 양 손에 들고 팔을 앞쪽으로 들어 올린다. 2. 어깨가 평행하게 되도록 덤벨을 올린다. 3. 천천히 덤벨을 원래 위치로 내린다.'
          }
        }
      },
      '팔': {
        exercises: ['바이셉스 컬', '트라이셉스 익스텐션', '푸쉬다운'],
        info: {
          '바이셉스 컬': {
            description: '덤벨을 사용하여 상완 이두근을 강화합니다.',
            equipment: '덤벨',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 덤벨을 양 손에 들고 팔을 쭉 뻗는다. 2. 팔꿈치를 굽혀 덤벨을 어깨 쪽으로 올린다. 3. 천천히 덤벨을 원래 위치로 내린다.'
          },
          '트라이셉스 익스텐션': {
            description: '덤벨을 머리 위로 올려 삼두근을 강화합니다.',
            equipment: '덤벨',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 덤벨을 양 손으로 잡고 머리 위로 올린다. 2. 팔꿈치를 굽혀 덤벨을 머리 뒤로 내린다. 3. 팔을 펴면서 덤벨을 원래 위치로 올린다.'
          },
          '푸쉬다운': {
            description: '케이블 머신을 사용하여 삼두근을 강화합니다.',
            equipment: '케이블 머신',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 케이블 머신의 손잡이를 잡고 팔꿈치를 몸 옆에 고정한다. 2. 팔꿈치를 굽히면서 손잡이를 아래로 내린다. 3. 천천히 손잡이를 원래 위치로 올린다.'
          }
        }
      },
      '복근': {
        exercises: ['크런치', '플랭크', '윗몸 일으키기'],
        info: {
          '크런치': {
            description: '복부를 굽히는 운동으로 복근을 강화합니다.',
            equipment: '자유 체중',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 바닥에 누워 무릎을 구부리고 발을 바닥에 붙인다. 2. 상체를 들어 올려 복근을 자극한다. 3. 천천히 상체를 원래 위치로 내린다.'
          },
          '플랭크': {
            description: '몸을 일직선으로 유지하여 복근을 강화합니다.',
            equipment: '자유 체중',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 팔꿈치를 바닥에 대고 몸을 일직선으로 유지한다. 2. 코어를 단단히 하고 자세를 유지한다.'
          },
          '윗몸 일으키기': {
            description: '상체를 일으켜 복근을 강화합니다.',
            equipment: '자유 체중',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 바닥에 누워 무릎을 구부리고 발을 바닥에 붙인다. 2. 상체를 일으켜 복근을 자극한다. 3. 천천히 상체를 원래 위치로 내린다.'
          }
        }
      }
    },
    '하체': {
      '허벅지': {
        exercises: ['스쿼트', '런지', '레그 프레스'],
        info: {
          '스쿼트': {
            description: '바벨을 어깨에 메고 무릎을 굽혀 허벅지를 강화합니다.',
            equipment: '바벨',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 바벨을 어깨에 메고 발을 어깨 너비로 벌린다. 2. 무릎을 굽혀 엉덩이를 뒤로 밀며 앉는다. 3. 허벅지가 바닥과 평행이 되도록 하고 다시 일어난다.'
          },
          '런지': {
            description: '한 발을 앞으로 내딛고 무릎을 굽혀 허벅지를 강화합니다.',
            equipment: '자유 체중',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 발을 앞으로 내딛고 무릎을 굽힌다. 2. 뒷발의 무릎이 바닥에 가까워지도록 한다. 3. 원래 자세로 돌아가고 다른 발로 반복한다.'
          },
          '레그 프레스': {
            description: '다리로 무게를 밀어 허벅지를 강화합니다.',
            equipment: '레그 프레스 머신',
            sets: '3세트',
            time: '60초 휴식',
            instructions: '1. 레그 프레스 머신에 앉아 발판에 발을 놓는다. 2. 무게를 밀어내며 다리를 펴고 허벅지를 자극한다. 3. 천천히 원래 위치로 돌아간다.'
          }
        }
      },
      '종아리': {
        exercises: ['카프 레이즈', '시팅 카프 레이즈', '스탠딩 카프 레이즈'],
        info: {
          '카프 레이즈': {
            description: '발끝으로 서서 종아리를 강화합니다.',
            equipment: '자유 체중',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 발끝으로 서서 발뒤꿈치를 천천히 내린다. 2. 발끝으로 올라가며 종아리를 자극한다. 3. 천천히 발뒤꿈치를 내린다.'
          },
          '시팅 카프 레이즈': {
            description: '앉아서 발끝으로 종아리를 강화합니다.',
            equipment: '카프 레이즈 머신',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 카프 레이즈 머신에 앉아 발끝으로 올라간다. 2. 발뒤꿈치를 천천히 내린다. 3. 발끝으로 올라가며 종아리를 자극한다.'
          },
          '스탠딩 카프 레이즈': {
            description: '서서 발끝으로 종아리를 강화합니다.',
            equipment: '카프 레이즈 머신',
            sets: '3세트',
            time: '30초 휴식',
            instructions: '1. 카프 레이즈 머신에 서서 발끝으로 올라간다. 2. 발뒤꿈치를 천천히 내린다. 3. 발끝으로 올라가며 종아리를 자극한다.'
          }
        }
      }
    }
  };

  const getRandomExercise = () => {
    const categories = Object.keys(exercises);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const subExercises = exercises[randomCategory];
    const subCategories = Object.keys(subExercises);
    const randomSubCategory = subCategories[Math.floor(Math.random() * subCategories.length)];
    const randomExercise = subExercises[randomSubCategory].exercises[Math.floor(Math.random() * subExercises[randomSubCategory].exercises.length)];
    const exerciseInfo = subExercises[randomSubCategory].info[randomExercise];

    setRecommendation(`${randomCategory}: ${randomSubCategory}`);
    setDetails(randomExercise);
    setInfo(exerciseInfo.description);
    setSets(exerciseInfo.sets);
    setTime(exerciseInfo.time);
    setInstructions(exerciseInfo.instructions);
    setEquipment(exerciseInfo.equipment);
  };

  return (
    <div className="App">
      <h1>오늘의 운동 추천</h1>
      <button onClick={getRandomExercise}>운동 추천받기</button>
      {recommendation && (
        <div className="recommendation">
          <h2>추천 운동 카테고리: {recommendation}</h2>
          <h3>운동: {details}</h3>
          <p><strong>설명:</strong> {info}</p>
          <p><strong>기구:</strong> {equipment}</p>
          <p><strong>세트 수:</strong> {sets}</p>
          <p><strong>휴식 시간:</strong> {time}</p>
          <p><strong>운동 방법:</strong> {instructions}</p>
        </div>
      )}
    </div>
  );
}

export default App;

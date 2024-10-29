// 游戏数据
const levels = [
    {
      image: 'image1.jpg', // 你将提供的图片路径
      hints: [
        "This is a famous European city.",
        "It's known for its romantic atmosphere.",
        "It has an iconic tower."
      ],
      answer: 'Paris'
    },
    {
      image: 'image2.jpg',
      hints: [
        "This city has a huge statue of a lady holding a torch.",
        "It is located on the east coast of the USA.",
        "It is known as the Big Apple."
      ],
      answer: 'New York'
    }
  ];
  
  let currentLevel = 0; // 当前关卡
  let currentHint = 0; // 当前提示
  let score = 0; // 玩家得分
  
  // 加载关卡
  function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('location-image').src = level.image;
    document.getElementById('hint-text').innerText = level.hints[currentHint];
  }
  
  // 获取下一个提示
  function nextHint() {
    currentHint++;
    const level = levels[currentLevel];
    if (currentHint < level.hints.length) {
      document.getElementById('hint-text').innerText = level.hints[currentHint];
    } else {
      alert("No more hints available!");
    }
  }
  
  // 检查答案
  function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    const level = levels[currentLevel];
    if (userAnswer.toLowerCase() === level.answer.toLowerCase()) {
      score += 10; // 答对加分
      document.getElementById('score').innerText = score;
      alert("Correct! Moving to the next level.");
      currentLevel++;
      currentHint = 0;
      if (currentLevel < levels.length) {
        loadLevel(); // 加载新关卡
      } else {
        alert("Congratulations! You've completed the game!");
      }
    } else {
      alert("Incorrect. Try again!");
    }
  }
  
  // 初始化游戏
  loadLevel();
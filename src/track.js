const alreadyTriggeredGoals = [];

module.exports = function (goalId, value) {
  return function () {
    if (!alreadyTriggeredGoals.includes(goalId)) {
      // console.log("track", goalId, value);
      alreadyTriggeredGoals.push(goalId);
      window.fathom && window.fathom.trackGoal && window.fathom.trackGoal(goalId, value ? value : 0);
    }

    return true;
  }
}

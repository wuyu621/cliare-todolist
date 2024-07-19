import pika from "./assets/images/pika.svg";

const Completed = () => {
  return (
    <div>
      <div className="noTaskList">
        <em>Ye! all the work completed!</em>
        <img src={pika} alt="pika" />
      </div>
    </div>
  );
};

export default Completed;

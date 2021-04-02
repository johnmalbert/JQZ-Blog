import React from "react";
import _ from "lodash";
import Unicorn from "./Unicorn.js";
import Number from "./Number.js";

import "./styles.css";
import "./unicorn.css";

// Color of Target Number box will be determined on game status
const colors = {
    new: "#26325b",
    playing: "#C87324",
    won: "#1E6A5F",
    lost: "#943131"
};

// Chose a random number between Challenge Range and store it in a constant
const randomNumberBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

<Number />

class Game extends React.Component {
    // Set initial game status, starting timer and empty array to hold each selected ID
    state = {
        gameStatus: "new", // new, playing, won, lost
        remainingSeconds: this.props.initialSeconds,
        selectedIds: []
    };

    // Create an array of random numbers. Pick a random subset of numbers
    // (however many is determined by the answerSize) and the sum of those numbers will be the target.

    // This will determine how many numbers are displayed as possible answers and creates an array
    challengeNumbers = Array.from({
        length: this.props.challengeSize
    }).map(() => randomNumberBetween(...this.props.challengeRange));
    // Uses lodash to calculate the sum of randomly generated challenge numbers
    target = _.sum(_.sampleSize(this.challengeNumbers, this.props.answerSize));

    // If this is a game reset then start the game again
    componentDidMount() {
        if (this.props.autoPlay) {
            this.startGame();
        }
    }
    // Clear any running timers and restart the game
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    // If index number does not exist in array (outputing indexOf -1) then number is available
    isNumberAvailable = numberIndex =>
        this.state.selectedIds.indexOf(numberIndex) === -1;

    // Change game status to "playing" and decrement timer until it reaches zero
    startGame = () => {
        this.setState({ gameStatus: "playing" }, () => {
            this.intervalId = setInterval(() => {
                this.setState(prevState => {
                    const newRemainingSeconds = prevState.remainingSeconds - 1;
                    if (newRemainingSeconds === 0) {
                        clearInterval(this.intervalId);
                        return { gameStatus: "lost", remainingSeconds: 0 };
                    }
                    return { remainingSeconds: newRemainingSeconds };
                });
            }, 1000);
        });
    };

    // Every time a number is clicked add its ID to the selectedIds array
    selectNumber = numberIndex => {
        this.setState(
            prevState => {
                if (prevState.gameStatus !== "playing") {
                    return null;
                }
                const newSelectedIds = [...prevState.selectedIds, numberIndex];
                return {
                    selectedIds: newSelectedIds,
                    gameStatus: this.calcGameStatus(newSelectedIds)
                };
            },
            () => {
                if (this.state.gameStatus !== "playing") {
                    clearInterval(this.intervalId);
                }
            }
        );
    };
    // Compute a new game status with every click to determine if the player won or lost
    calcGameStatus = newSelectedIds => {
        const sumSelected = newSelectedIds.reduce(
            (acc, curr) => acc + this.challengeNumbers[curr],
            0
        );
        if (newSelectedIds.length !== this.props.answerSize) {
            return "playing";
        }
        return sumSelected === this.target ? "won" : "lost";
    };

    render() {
        const { gameStatus, remainingSeconds } = this.state;
        return (
            <div className="game">
                <div className="help">
                    {/* Pull in instructions determined by what answer size and time is set */}
                    Pick {this.props.answerSize} numbers that sum to the target in{" "}
                    {this.props.initialSeconds} seconds
                </div>
                {/* Target number that will change color depending on game status. If not playing then show the word "target" instead */}
                <div className="target" style={{ backgroundColor: colors[gameStatus] }}>
                    <span>{gameStatus === "new" ? "TARGET" : this.target}</span>
                </div>
                {/* Set of challenge numbers */}
                <div className="challenge-numbers">
                    {this.challengeNumbers.map((value, index) => (
                        <Number
                            key={index}
                            id={index}
                            value={gameStatus === "new" ? "?" : value}
                            clickable={this.isNumberAvailable(index)}
                            onClick={this.selectNumber}
                        />
                    ))}
                </div>

                {/* Timer and start/ play button */}
                <div className="footer">
                    {gameStatus === "new" && (
                        <button className="game-button" onClick={this.startGame}>Start</button>
                    )}

                    {gameStatus === "playing" && (
                        <div className="timer-value">{remainingSeconds}</div>
                    )}

                    {["won", "lost"].includes(gameStatus) && (
                        <button className="game-button" onClick={this.props.onPlayAgain}>Play Again</button>
                    )}

                    {/* Display unicorn if you win!! :P */}
                    {gameStatus === "won" && <Unicorn />}
                </div>
            </div>
        );
    }
}

class GameContainer extends React.Component {
    state = {
        gameId: 1
    };

    resetGame = () =>
        this.setState(prevState => ({
            gameId: prevState.gameId + 1
        }));

    render() {
        return (
            <Game
                key={this.state.gameId}
                autoPlay={this.state.gameId > 1}
                challengeRange={[2, 9]}
                challengeSize={6}
                answerSize={4}
                initialSeconds={15}
                onPlayAgain={this.resetGame}
            />
        );
    }
}

export default GameContainer;
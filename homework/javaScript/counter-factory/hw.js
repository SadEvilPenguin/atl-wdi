// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
    lastCountId: 0,
    counters: [], // e.g. {countId: 3, count: 20}
    createCounter: function() {
        this.lastCountId++;
        this.counters.push({
            countId: this.lastCountId,
            count: 0
        });
        return this.lastCountId;
    },
    getCounterValue: function(countId) {
        console.log(`read counter #${countId}`);
        let counter = this.counters.find(function(counter) {
            return counter.countId === countId;
        });
        if (counter) { return counter.count; }
    },
    incrementCounter: function(countId) {
        console.log(`increment counter #${countId}`);
        let counter = this.counters.find(function(counter) {
            return counter.countId === countId;
        });
        if (counter) {
            counter.count += 1;
            return counter.count;
        }
    },
    destroyCounter: function(countId) {
        console.log(`destroy counter #${countId}`);
        let counter = this.counters.find(function(counter) {
            return counter.countId === countId;
        });
        if (counter) { counter.destroy(); }
        this.counters = this.counters.filter(function(counter) { //
            return counter.countId !== countId
        });
    }
};

// UI //
const Presenter = {
    insertCounterComponent: function(newCountId) {
        console.log(`insert counter component #${newCountId}`);
        let div = document.createElement("div");
        div.innerHTML = "<h3>Count: <span>0</span></h3> <button class='increment'>+1</button> <button class='delete'> Delete </button>";
        div.className = "counter";
        div.dataset.index = newCountId;
        div.getElementsByClassName('increment')[0].onclick = AppController.onClickIncrement;
        div.getElementsByClassName('delete')[0].onclick = AppController.onClickDelete;
        document.getElementById("counter-list").appendChild(div);

    },
    refreshCounterComponent: function(countId) {
        console.log(`refresh counter component #${countId}`);
        let value = CounterCollection.getCounterValue(countId);
        console.log(value);
        document.querySelector(`[data-index="${countId}"] span`).innerHTML = value;

    },
    removeCounterComponent: function(countId) { // REACH
        console.log(`remove counter component #${countId}`);
        // Your Code Here
        let div = document.querySelector(`[data-index="${countId}"]`);
        document.getElementById("counter-list").removeChild(div);
    }
};

// Top-Level Application Control //
const AppController = {
    onClickNewCounter: function(event) {
        CounterCollection.createCounter();
        Presenter.insertCounterComponent(CounterCollection.lastCountId);
    },
    onClickIncrement: function(event) {
        let counterId = Number(event.target.parentNode.dataset.index);
        console.log(`click incerement #${counterId}`);
        CounterCollection.incrementCounter(counterId);
        Presenter.refreshCounterComponent(counterId);


    },
    onClickDelete: function(event) { // REACH
        let counterId = Number(event.target.parentNode.dataset.index);
        //CounterCollection.destroyCounter(counterId);
        Presenter.removeCounterComponent(counterId);
    }
};

window.onload = function() {
    document.getElementById('new-counter').onclick = AppController.onClickNewCounter;

};
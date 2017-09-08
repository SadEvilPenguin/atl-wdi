// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
    tickClock: function() {
        if (Stopwatch.isRunning) {
            setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
            Stopwatch.advanceTenMillisecs();
            AppController.handleClockTick();
        }
    },
    isRunning: false,
    mins: 0,
    secs: 0,
    millisecs: 0,
    laps: [],
    // DO NOT EDIT ABOVE THIS LINE
    advanceTenMillisecs: function() {
        // Your Code Here
        if (this.secs > 59) {
            this.mins += 1;
            this.secs = 00;
        }
        if (this.millisecs < 1000) {
            this.millisecs += 010;
        } else if (this.millisecs === 1000) {
            this.secs += 01;
            this.millisecs = 000;
        }
    },
    reset: function() {
        // Your Code Here
        this.millisecs = 0;
        this.secs = 0;
        this.mins = 0;
    },
    start: function() {
        // Your Code Here
        Stopwatch.isRunning = true;
    },
    stop: function() {
        // Your Code Here
        Stopwatch.isRunning = false;
    },
    lap: function() {
        // Your Code Here
        this.laps.push(this.mins);
        this.laps.push(this.secs);
        this.laps.push(this.millisecs);
    }
};

/// User Interface ///
const ViewEngine = {
    updateTimeDisplay: function(mins, secs, millisecs) {
        // Your Code Here
        $("#millisecs").text(ViewHelpers.zeroFill(millisecs, 3));
        $("#secs").text(ViewHelpers.zeroFill(secs, 2));
        $("#mins").text(ViewHelpers.zeroFill(mins, 2));

    },
    updateLapListDisplay: function(laps) {
        // Your Code Here
    },
};
const ViewHelpers = {
    zeroFill: function(number, length) {
        // Your Code Here
        let numString = number.toString();

        if ((length - numString.length) === 1) {
            return `0${numString}`;
        } else if ((length - numString.lenght) === 2) {
            return `00${numString}`
        } else {
            return numString;
        }
    },
};

/// Top-Level Application Code ///
const AppController = {
    handleClockTick: function() {
        // Your Code Here
        ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    },
    handleClickStart: function() {
        // Your Code Here
        Stopwatch.start();
        Stopwatch.tickClock();
    },
    handleClickStopReset: function() {
        // Your Code Here
        if (Stopwatch.isRunning === true) {
            Stopwatch.stop();
        } else {
            Stopwatch.reset();
            $("#millisecs").text("000");
            $("#secs").text("00");
            $("#mins").text("00");
            $("#lap-list").empty();
        }
    },
    handleClickLap: function() {
        // Your Code Here
        if (Stopwatch.isRunning === true) {
            Stopwatch.lap();
            let lap = $("<li></li>");
            let millisecs = ViewHelpers.zeroFill(Stopwatch.laps.pop(), 3);
            let secs = ViewHelpers.zeroFill(Stopwatch.laps.pop(), 2);
            let mins = ViewHelpers.zeroFill(Stopwatch.laps.pop(), 2);
            lap.append(`${mins}:${secs}:${millisecs}`);
            $('#lap-list').append(lap);
        }
    }
};

window.onload = function() {
    // Attach AppController methods to the DOM as event handlers here.
    $('#start').on('click', function() {
        AppController.handleClickStart();
    });
    $('#stop').on('click', function() {
        AppController.handleClickStopReset();
    });
    $('#lap').on('click', function() {
        AppController.handleClickLap();
    });
};
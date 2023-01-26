import angular from "angular";

class temperatureCtrl {
    public $inject!: string[];
    public $scope!: angular.IScope;
    protected title: string;
    protected showHere!: string;

    constructor() {
        this.title = "Temperature °C °F";
    }

    protected CelsiusToFahrenheit(Celsius: number | null) {
        let result;
        if(Celsius) {
            result = (Celsius * 1.8) + 32;
            this.showHere = `${result} °F`;
        };
    };

    protected FahrenheitToCelsius(Fahrenheit: number | null) {
        let result;
        if(Fahrenheit) {
            result = (Fahrenheit - 32) / 1.8;
            this.showHere = `${result} °C`;
        };
    };
}

temperatureCtrl.$inject = [ '$scope' ];
export { temperatureCtrl }
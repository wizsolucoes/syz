import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { TimelineDataInterface } from "../../models/timeline-data.interface";

@Component({
  tag: "wiz-timeline",
  styleUrl: "timeline-component.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class TimelineComponent implements ComponentInterface {
  @Prop() timelineData: Array<TimelineDataInterface>;

  @Prop() textColor: string = "#000000";
  @Prop() progressColor: string = "#f3efe6";
  @Prop() progressBarColor: string = "#22c9a4";
  @Prop() currentDotColor: string = "#ff9000";
  @Prop() completedDotColor: string = "#22c9a4";
  @Prop() dotColor: string;

  private ProgressBarPercentage: number;

  componentWillRender() {
    this.timelineData.map((item, index) => {
      if (item.Current) {
        this.ProgressBarPercentage =
          (100 / this.timelineData.length) * (index + 1);
      }
    });
  }

  render() {
    return (
      <div>
        <div id="timeline">
          <div>
            <div class="text-steps">
              {this.timelineData.map((step) => (
                <h4
                  class={
                    "dot " +
                    (step.Current ? "text-current " : "") +
                    (step.Completed ? "text-completed " : "") +
                    (!step.Current && !step.Completed ? "text-default " : "")
                  }
                  style={{
                    color: this.textColor,
                  }}
                >
                  {step.Name}
                </h4>
              ))}
            </div>
          </div>

          <div class="dots">
            {this.timelineData.map((step) => (
              <div class="dotWrapper">
                <div
                  class={
                    "dot " +
                    (step.Current ? "current " : "") +
                    (step.Completed ? "completed " : "") +
                    (!step.Current && !step.Completed ? "default " : "")
                  }
                  style={
                    step.Current
                      ? {
                          backgroundColor: this.currentDotColor,
                          boxShadow: `0 0 5px ${this.currentDotColor}`,
                        }
                      : step.Completed
                      ? {
                          backgroundColor: this.completedDotColor,
                          boxShadow: `0 0 5px ${this.completedDotColor}`,
                        }
                      : {
                          backgroundColor: this.dotColor,
                        }
                  }
                ></div>
              </div>
            ))}
          </div>
          <div
            class="progress-timeline"
            style={{
              backgroundColor: this.progressColor,
            }}
          >
            <div
              style={{
                width: `${this.ProgressBarPercentage}%`,
              }}
            >
              <div
                class="progress"
                style={{
                  backgroundColor: this.progressBarColor,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

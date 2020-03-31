const { System } = require('@rsthn/cherry');

global.main = function()
{
	// Initialize the system.
	System.init ({
		background: '#114',
		fullscreen: false
	});

	// Prepare the state of two objects.
	const Circle1 = { x: 10, y: 10, radius: 16, dx: 3, dy: 2, color: 'red' };
	const Circle2 = { x: 50, y: 10, radius: 16, dx: -5, dy: 3, color: 'green' };
	const Circle3 = { x: 10, y: 50, radius: 16, dx: 7, dy: -5, color: 'blue' };

	// Attach both update and draw.
	System.queueAdd
	({
		updateCircle: function (circle, deltaTime)
		{
			circle.x += circle.dx;
			circle.y += circle.dy;

			if (circle.x-circle.radius < 0)
			{
				circle.x = 0 + circle.radius;
				circle.dx *= -1;
			}

			if (circle.y-circle.radius < 0)
			{
				circle.y = 0 + circle.radius;
				circle.dy *= -1;
			}

			if (circle.x+circle.radius > System.screenWidth)
			{
				circle.x = System.screenWidth - circle.radius;
				circle.dx *= -1;
			}

			if (circle.y+circle.radius > System.screenHeight)
			{
				circle.y = System.screenHeight - circle.radius;
				circle.dy *= -1;
			}
		},

		drawCircle: function (circle, canvas)
		{
			canvas.beginPath();
			canvas.circle(circle.x, circle.y, circle.radius);
			canvas.fill(circle.color);
		},

		update: function (deltaTime)
		{
			this.updateCircle (Circle1, deltaTime);
			this.updateCircle (Circle2, deltaTime);
			this.updateCircle (Circle3, deltaTime);
		},

		draw: function (canvas)
		{
			canvas.clear();

			this.drawCircle (Circle1, canvas);
			this.drawCircle (Circle2, canvas);
			this.drawCircle (Circle3, canvas);
		}
	});

	System.start();
}

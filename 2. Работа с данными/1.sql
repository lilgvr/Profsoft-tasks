SELECT name
FROM Restaurants INNER JOIN Employees ON Employees.restaurantId = Restaurants.id INNER JOIN Positions ON Employees.positionId = Positions.id 
WHERE (SELECT top 1 id from Positions Where title = 'waiter') = Employees.positionId
GROUP BY name
HAVING count(name) > 2
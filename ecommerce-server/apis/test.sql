SELECT r.sellers_id, s.name, sum(r.amount) as tot_amount
FROM revenues r, sellers s
WHERE date_format(r.date, "%Y")=date_format(sysdate(), "%Y") AND s.id=r.sellers_id
GROUP BY sellers_id
ORDER BY (tot_amount) DESC
LIMIT 3;

select * from revenues
where date between now() - interval 7 day and now();

select r.date, count(s.id)
FROM revenues r, sellers s
WHERE s.id=r.sellers_id
GROUP BY r.date
------------------------ sellers
select joined_date, count(id) as sellers_count
FROM sellers
WHERE joined_date between (now() - interval 366 day) and (now() - interval 276 day)
GROUP BY joined_date 
ORDER BY joined_date DESC

select joined_date, count(id) as sellers_count
FROM sellers
WHERE joined_date between (now() - interval 276 day) and (now() - interval 186 day)
GROUP BY joined_date 
ORDER BY joined_date DESC

select joined_date, count(id) as sellers_count
FROM sellers
WHERE joined_date between (now() - interval 186 day) and (now() - interval 96 day)
GROUP BY joined_date 
ORDER BY joined_date DESC

select joined_date, count(id) as sellers_count
FROM sellers
WHERE joined_date between (now() - interval 96 day) and now()
GROUP BY joined_date 
ORDER BY joined_date DESC
------------------------ clients
select joined_date, count(id) as clients_count
FROM clients
WHERE joined_date between (now() - interval 366 day) and (now() - interval 276 day)
GROUP BY joined_date 
ORDER BY joined_date DESC

select joined_date, count(id) as clients_count
FROM clients
WHERE joined_date between (now() - interval 276 day) and (now() - interval 186 day)
GROUP BY joined_date 
ORDER BY joined_date DESC

select joined_date, count(id) as clients_count
FROM clients
WHERE joined_date between (now() - interval 186 day) and (now() - interval 96 day)
GROUP BY joined_date 
ORDER BY joined_date DESC

select joined_date, count(id) as clients_count
FROM clients
WHERE joined_date between (now() - interval 96 day) and now()
GROUP BY joined_date 
ORDER BY joined_date DESC

------------------------- products

select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 366 day) and (now() - interval 276 day)
GROUP BY issue_date 
ORDER BY issue_date DESC

select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 276 day) and (now() - interval 186 day)
GROUP BY issue_date 
ORDER BY issue_date DESC

select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 186 day) and (now() - interval 96 day)
GROUP BY issue_date 
ORDER BY issue_date DESC

select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 96 day) and now()
GROUP BY issue_date 
ORDER BY issue_date DESC

-- select r.date, count(s.id)
-- FROM revenues r, sellers s
-- WHERE s.id=r.sellers_id and r.date between now() and (now() + interval 96 day)
-- GROUP BY r.date
-- ORDER BY r.date DESC
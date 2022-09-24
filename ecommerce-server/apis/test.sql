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

select r.date, count(s.id)
FROM revenues r, sellers s
WHERE s.id=r.sellers_id and r.date between (now() - interval 366 day) and (now() - interval 276 day)
GROUP BY r.date 
ORDER BY r.date DESC

select r.date, count(s.id)
FROM revenues r, sellers s
WHERE s.id=r.sellers_id and r.date between (now() - interval 276 day) and (now() - interval 186 day)
GROUP BY r.date 
ORDER BY r.date DESC

select r.date, count(s.id)
FROM revenues r, sellers s
WHERE s.id=r.sellers_id and r.date between (now() - interval 186 day) and (now() - interval 96 day)
GROUP BY r.date 
ORDER BY r.date DESC

select r.date, count(s.id)
FROM revenues r, sellers s
WHERE s.id=r.sellers_id and r.date between (now() - interval 96 day) and now()
GROUP BY r.date
ORDER BY r.date DESC

-- select r.date, count(s.id)
-- FROM revenues r, sellers s
-- WHERE s.id=r.sellers_id and r.date between now() and (now() + interval 96 day)
-- GROUP BY r.date
-- ORDER BY r.date DESC
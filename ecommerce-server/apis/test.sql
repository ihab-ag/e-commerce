SELECT r.sellers_id, s.name, sum(r.amount) as tot_amount
FROM revenues r, sellers s
WHERE date_format(r.date, "%Y")=date_format(sysdate(), "%Y") AND s.id=r.sellers_id
GROUP BY sellers_id
ORDER BY (tot_amount) DESC
LIMIT 3;
